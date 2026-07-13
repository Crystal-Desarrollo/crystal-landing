<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Contact;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

class DiscordLeadNotifier
{
    private const MENTION_USER_ID = '258090644717699092';

    private const EMBED_COLOR = 0x7F46F0;

    public function notify(Contact $contact): void
    {
        $webhookUrl = config('services.discord.contact_webhook_url');

        if (empty($webhookUrl)) {
            return;
        }

        try {
            Http::post($webhookUrl, $this->payload($contact));
        } catch (Throwable $e) {
            Log::error('Failed to send Discord lead notification', [
                'contact_id' => $contact->id,
                'error' => $e->getMessage(),
            ]);
        }
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(Contact $contact): array
    {
        return [
            'content' => '<@'.self::MENTION_USER_ID.'> Nuevo lead de Crystal Desarrollo',
            'embeds' => [
                [
                    'title' => "Nuevo lead: {$contact->name}",
                    'color' => self::EMBED_COLOR,
                    'fields' => $this->embedFields($contact),
                ],
            ],
            'allowed_mentions' => [
                'users' => [self::MENTION_USER_ID],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function embedFields(Contact $contact): array
    {
        $fields = [
            [
                'name' => 'Nombre',
                'value' => $contact->name,
                'inline' => true,
            ],
            [
                'name' => 'Email',
                'value' => $contact->email,
                'inline' => true,
            ],
            [
                'name' => 'Área',
                'value' => $contact->area,
                'inline' => true,
            ],
            [
                'name' => 'Mensaje',
                'value' => $contact->message,
                'inline' => false,
            ],
        ];

        if ($contact->company) {
            $fields[] = [
                'name' => 'Empresa',
                'value' => $contact->company,
                'inline' => true,
            ];
        }

        if ($contact->lang) {
            $fields[] = [
                'name' => 'Idioma',
                'value' => strtoupper($contact->lang),
                'inline' => true,
            ];
        }

        return $fields;
    }
}
