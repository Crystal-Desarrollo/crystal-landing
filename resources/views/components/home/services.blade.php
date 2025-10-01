<header
  class="container mx-auto flex flex-col gap-8 items-center py-16"
>
    <x-ui.title badge-text="{{ __('pages/home.services.badge') }}">
        {{ __('pages/home.services.title') }}
    </x-ui.title>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full auto-rows-max">
        <x-ui.service
          title="{{ __('pages/home.services.custom_software.title') }}"
          descriptionHighlight="{{ __('pages/home.services.custom_software.description_highlight') }}"
          description="{!!  __('pages/home.services.custom_software.description')  !!}"
          image="{{asset('assets/services/custom-software.png')}}"
          href="#"
        />
        {{--        <div--}}
        {{--          class="row-span-2  bg-gradient-to-br from-accent/40 to-accent hidden lg:flex lg:flex-col lg:justify-end drop-shadow-xl rounded-4xl w-full aspect-square lg:aspect-auto flex-col p-10 relative hover:scale-105 transition-all duration-300"--}}
        {{--        >--}}
        {{--            <div class="w-full h-64 lg:h-[50%]">--}}
        {{--                --}}
        {{--                <img--}}
        {{--                  class="h-full w-full object-contain"--}}
        {{--                  src="{{asset('assets/services/app-example.png')}}"--}}
        {{--                  alt="Example application screenshot"--}}
        {{--                >--}}
        {{--            </div>--}}
        {{--        </div>--}}
        <x-ui.service
          title="{!!  __('pages/home.services.branding.title')  !!}"
          descriptionHighlight="{{ __('pages/home.services.branding.description_highlight') }}"
          description="{{ __('pages/home.services.branding.description') }}"
          image="{{asset('assets/services/branding.png')}}"
          href="#"
        />
        <x-ui.service
          title="{{ __('pages/home.services.technical_support.title') }}"
          descriptionHighlight="{{ __('pages/home.services.technical_support.description_highlight') }}"
          description="{{ __('pages/home.services.technical_support.description') }}"
          image="{{asset('assets/services/infrastructure.png')}}"
          href="#"
        />
        <x-ui.service
          title="{{ __('pages/home.services.express_solutions.title') }}"
          descriptionHighlight="{{ __('pages/home.services.express_solutions.description_highlight') }}"
          description="{{ __('pages/home.services.express_solutions.description') }}"
          image="{{asset('assets/services/saas.png')}}"
          href="#"
        />
    </div>
</header>
