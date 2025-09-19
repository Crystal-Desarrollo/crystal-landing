@props([
    'page' => 'default',
    'title' => null,
    'description' => null,
    'keywords' => null,
    'image' => null,
    'url' => null,
    'type' => null,
    'locale' => null,
    'alternateLocales' => ['en', 'es'],
    'noindex' => false,
    'nofollow' => false,
])

@php
    // Get SEO data from translations with fallback to default
    $seoData = __("seo.{$page}");
    if (!is_array($seoData)) {
        $seoData = __('seo.default');
    }
    
    // Merge default values with page-specific and prop overrides
    $defaultData = __('seo.default');
    $finalTitle = $title ?? $seoData['title'] ?? $defaultData['title'];
    $finalDescription = $description ?? $seoData['description'] ?? $defaultData['description'];
    $finalKeywords = $keywords ?? $seoData['keywords'] ?? $defaultData['keywords'];
    $finalType = $type ?? $seoData['og_type'] ?? $defaultData['og_type'];
    $finalLocale = $locale ?? $seoData['og_locale'] ?? $defaultData['og_locale'];
    
    // Generate URLs
    $currentUrl = $url ?? request()->url();
    $canonicalUrl = $seoData['canonical_url'] ?? $currentUrl;
    $defaultImage = $image ?? asset('images/og-default.jpg');
    
    // Robots directive
    $robotsContent = [];
    if ($noindex || ($seoData['robots'] ?? $defaultData['robots']) === 'noindex') {
        $robotsContent[] = 'noindex';
    } else {
        $robotsContent[] = 'index';
    }
    
    if ($nofollow || strpos(($seoData['robots'] ?? $defaultData['robots']), 'nofollow') !== false) {
        $robotsContent[] = 'nofollow';
    } else {
        $robotsContent[] = 'follow';
    }
    
    $robotsDirective = implode(', ', $robotsContent);
@endphp

{{-- Basic Meta Tags --}}
<title>{{ $finalTitle }}</title>
<meta name="description" content="{{ $finalDescription }}">
<meta name="keywords" content="{{ $finalKeywords }}">
<meta name="author" content="{{ $defaultData['author'] }}">
<meta name="robots" content="{{ $robotsDirective }}">

{{-- Canonical URL --}}
<link rel="canonical" href="{{ $canonicalUrl }}">

{{-- Language and Locale --}}
<meta name="language" content="{{ app()->getLocale() }}">
<link rel="alternate" hreflang="{{ app()->getLocale() }}" href="{{ $currentUrl }}">

{{-- Generate alternate language links --}}
@foreach($alternateLocales as $altLocale)
    @if($altLocale !== app()->getLocale())
        <link
          rel="alternate" hreflang="{{ $altLocale }}"
          href="{{ str_replace('/' . app()->getLocale() . '/', '/' . $altLocale . '/', $currentUrl) }}"
        >
    @endif
@endforeach

{{-- Default alternate for unsupported languages --}}
<link
  rel="alternate" hreflang="x-default" href="{{ str_replace('/' . app()->getLocale() . '/', '/en/', $currentUrl) }}"
>

{{-- Open Graph Meta Tags --}}
<meta property="og:type" content="{{ $finalType }}">
<meta property="og:title" content="{{ $finalTitle }}">
<meta property="og:description" content="{{ $finalDescription }}">
<meta property="og:url" content="{{ $canonicalUrl }}">
<meta property="og:site_name" content="{{ config('app.name') }}">
<meta property="og:locale" content="{{ $finalLocale }}">
<meta property="og:image" content="{{ $defaultImage }}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:alt" content="{{ $finalTitle }}">

{{-- Twitter Card Meta Tags --}}
<meta name="twitter:card" content="{{ $defaultData['twitter_card'] }}">
<meta name="twitter:site" content="{{ $defaultData['twitter_site'] }}">
<meta name="twitter:title" content="{{ $finalTitle }}">
<meta name="twitter:description" content="{{ $finalDescription }}">
<meta name="twitter:image" content="{{ $defaultImage }}">
<meta name="twitter:image:alt" content="{{ $finalTitle }}">

{{-- Additional SEO Meta Tags --}}
<meta name="theme-color" content="#ffffff">
<meta name="msapplication-navbutton-color" content="#ffffff">
<meta name="apple-mobile-web-app-status-bar-style" content="default">

{{-- Preconnect to external domains for performance --}}
<link rel="preconnect" href="https://fonts.bunny.net">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

{{-- DNS Prefetch for performance --}}
<link rel="dns-prefetch" href="//fonts.bunny.net">
<link rel="dns-prefetch" href="//www.google-analytics.com">

{{-- Security Headers --}}
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
