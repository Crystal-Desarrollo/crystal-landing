<?php

declare(strict_types=1);

use App\Mail\ContactLeadMail;
use App\Models\Contact;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

it('stores contact, sends email and notifies discord', function () {
    Mail::fake();
    Http::fake();

    config()->set('services.discord.contact_webhook_url', 'https://discord.example.com/webhook');

    $response = $this->postJson('/api/contact', [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'company' => 'Acme',
        'area' => 'desarrollo',
        'message' => 'I need a web app.',
        'lang' => 'en',
    ]);

    $response->assertCreated();

    expect(Contact::query()->where('email', 'jane@example.com')->exists())->toBeTrue();

    Mail::assertSent(ContactLeadMail::class, function (ContactLeadMail $mail) {
        return $mail->hasTo(config('mail.from.address'));
    });

    Http::assertSent(function ($request) {
        return $request->url() === 'https://discord.example.com/webhook'
            && str_contains($request['content'] ?? '', '<@258090644717699092>');
    });
});

it('does not fail when discord webhook is not configured', function () {
    Mail::fake();
    Http::fake();

    config()->set('services.discord.contact_webhook_url', null);

    $response = $this->postJson('/api/contact', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'area' => 'saas',
        'message' => 'Hello',
    ]);

    $response->assertCreated();

    Http::assertNothingSent();
});

it('validates required contact fields', function () {
    $response = $this->postJson('/api/contact', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name', 'email', 'area', 'message']);
});
