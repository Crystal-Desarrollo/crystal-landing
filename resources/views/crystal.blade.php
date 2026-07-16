<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary SEO -->
    <title>Crystal Desarrollo | Software a Medida · Apps · Sistemas · Jujuy, Argentina</title>
    <meta name="description" content="Crystal Desarrollo: empresa de software a medida, productos SaaS y soporte técnico. Sistemas web, apps móviles, POS, gestión de estacionamientos y más." />
    <meta name="keywords" content="software a medida jujuy, desarrollo de software, sistemas de gestión, soporte técnico jujuy, aplicaciones web argentina, crystal desarrollo" />
    <link rel="canonical" href="{{ config('app.url') }}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ config('app.url') }}" />
    <meta property="og:title" content="Crystal Desarrollo | Software a Medida · Jujuy, Argentina" />
    <meta property="og:description" content="Desarrollo de software a medida, productos SaaS y soporte técnico para empresas del NOA." />
    <meta property="og:image" content="{{ asset('og_image.png') }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:site_name" content="Crystal Desarrollo" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Crystal Desarrollo | Software a Medida · Jujuy" />
    <meta name="twitter:description" content="Desarrollo de software, SaaS y soporte técnico en Jujuy, Argentina." />
    <meta name="twitter:image" content="{{ asset('og_image.png') }}" />

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('favicon-96x96.png') }}" />
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}" />

    <!-- Schema.org LocalBusiness -->
    <script type="application/ld+json">
    {
      "@@context": "https://schema.org",
      "@@type": "LocalBusiness",
      "name": "Crystal Desarrollo",
      "description": "Empresa de desarrollo de software a medida, productos SaaS y soporte técnico en Jujuy, Argentina.",
      "url": "{{ config('app.url') }}",
      "email": "contacto@crystal-desarrollo.com",
      "telephone": ["+54-9-388-480-4401", "+54-9-388-409-2771"],
      "address": {
        "@@type": "PostalAddress",
        "streetAddress": "Ramírez de Velasco 565, 3A",
        "addressLocality": "San Salvador de Jujuy",
        "addressRegion": "Jujuy",
        "postalCode": "4600",
        "addressCountry": "AR"
      },
      "geo": {
        "@@type": "GeoCoordinates",
        "latitude": -24.1858,
        "longitude": -65.2995
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [],
      "hasOfferCatalog": {
        "@@type": "OfferCatalog",
        "name": "Servicios Crystal Desarrollo",
        "itemListElement": [
          { "@@type": "Offer", "itemOffered": { "@@type": "Service", "name": "Desarrollo de software a medida" } },
          { "@@type": "Offer", "itemOffered": { "@@type": "Service", "name": "Productos SaaS" } },
          { "@@type": "Offer", "itemOffered": { "@@type": "Service", "name": "Soporte técnico" } }
        ]
      }
    }
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/main.jsx'])
</head>
<body class="bg-[#0D0D12] text-[#F0EEF8]">
    <div id="app"></div>
</body>
</html>
