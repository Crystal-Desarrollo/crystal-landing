<?php

namespace App\Http\Controllers;

use App\Mail\ContactLeadMail;
use App\Models\Contact;
use App\Services\DiscordLeadNotifier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'area' => ['required', 'in:desarrollo,saas,soporte,otro'],
            'message' => ['required', 'string', 'max:5000'],
            'lang' => ['nullable', 'in:es,en'],
        ]);

        $contact = Contact::create($validated);

        Mail::to(config('mail.from.address'))
            ->send(new ContactLeadMail($contact));

        (new DiscordLeadNotifier)->notify($contact);

        return response()->json(['message' => 'ok'], 201);
    }
}
