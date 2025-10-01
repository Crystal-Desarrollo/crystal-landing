<header
  class="h-16 flex items-center  w-full px-4 bg-white drop-shadow lg:sticky top-0 z-30"
>
    <div class="container mx-auto flex w-full items-center  justify-between ">
        
        <div class="flex items-center space-x-2">
            
            <img src="{{ asset('assets/logo.svg') }}" alt="{{ __('pages/home.header.logo_alt') }}" class="h-10"/>
            
            <span class="font-bold text-3xl">{{ __('pages/home.header.logo_text') }}</span>
        </div>
        
        <button
          class="text-accent-content md:hidden cursor-pointer" aria-label="{{ __('pages/home.header.menu_button') }}"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
            </svg>
        </button>
        
        <nav class="items-center space-x-4 hidden md:flex">
            <a
              href="{{route('home')}}#hero" class="px-4 py-2 hover:text-accent"
            >{{ __('pages/home.header.nav_home') }}</a>
            <a
              href="{{route('home')}}#services" class="px-4 py-2 hover:text-accent"
            >{{ __('pages/home.header.nav_solutions') }}</a>
            <a href="/blog" class="px-4 py-2 hover:text-accent">{{ __('pages/home.header.nav_blog') }}</a>
            <a
              href="https://api.whatsapp.com/send?phone=543884804401&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20y%20c%C3%B3mo%20podr%C3%ADan%20ayudarme.%20%C2%A1Gracias!"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 rounded-full bg-accent hover:bg-accent/90 text-white inline-flex items-center gap-2 w-min"
            >
                <span class="text-nowrap">
                    {{ __('pages/home.header.nav_contact') }}
                </span>
                
                <svg
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  class="size-4 inline"
                >
                    <path
                      fill-rule="evenodd"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                      clip-rule="evenodd"
                    />
                </svg>
            </a>
        </nav>
    </div>
</header>