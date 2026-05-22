<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo lead — Crystal Desarrollo</title>
    <style>
        body { font-family: 'DM Sans', -apple-system, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
        .wrapper { max-width: 560px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
        .header { background: #0D0D12; padding: 28px 32px; }
        .header-title { color: #F0EEF8; font-size: 22px; font-weight: 600; margin: 0; }
        .header-sub { color: #F0EEF8; opacity: 0.5; font-size: 13px; margin: 4px 0 0; }
        .body { padding: 32px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #999; margin-bottom: 4px; }
        .value { font-size: 15px; color: #111; }
        .message-box { background: #f9f9f9; border-left: 3px solid #7F46F0; border-radius: 4px; padding: 14px 16px; color: #333; font-size: 14px; line-height: 1.6; }
        .footer { padding: 20px 32px; border-top: 1px solid #f0f0f0; text-align: center; }
        .cta-btn { display: inline-block; padding: 12px 28px; background: #7F46F0; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; }
        .meta { font-size: 11px; color: #bbb; margin-top: 16px; }
        .badge { display: inline-block; padding: 3px 10px; background: #7F46F0; color: white; border-radius: 99px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="header">
        <p class="header-title">Nuevo lead 🎯</p>
        <p class="header-sub">Crystal Desarrollo · {{ now()->format('d/m/Y H:i') }}</p>
    </div>
    <div class="body">
        <div class="field">
            <div class="label">Nombre</div>
            <div class="value">{{ $contact->name }}</div>
        </div>
        <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{{ $contact->email }}" style="color:#7F46F0;">{{ $contact->email }}</a></div>
        </div>
        @if($contact->company)
        <div class="field">
            <div class="label">Empresa</div>
            <div class="value">{{ $contact->company }}</div>
        </div>
        @endif
        <div class="field">
            <div class="label">Área de interés</div>
            <div class="value"><span class="badge">{{ $contact->area }}</span></div>
        </div>
        <div class="field">
            <div class="label">Idioma</div>
            <div class="value">{{ strtoupper($contact->lang) }}</div>
        </div>
        <div class="field">
            <div class="label">Mensaje</div>
            <div class="message-box">{{ $contact->message }}</div>
        </div>
    </div>
    <div class="footer">
        <a href="mailto:{{ $contact->email }}?subject=Re: tu consulta en Crystal Desarrollo" class="cta-btn">
            Responder a {{ $contact->name }}
        </a>
        <p class="meta">Lead #{{ $contact->id }} · contacto@crystal-desarrollo.com</p>
    </div>
</div>
</body>
</html>
