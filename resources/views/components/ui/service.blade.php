@props(['title', 'description', 'descriptionHighlight', 'image', 'href'])

<a href="{{$href}}"">
<div
  class="shadow-lg rounded-4xl w-full flex flex-col p-10 relative hover:scale-105 transition duration-300 bg-accent/5 hover:bg-gradient-to-b from-accent/10 to-accent/30"
>
    <img
      src="{{$image}}" class="h-32 w-auto self-start"
      alt="{{ __('pages/home.services.image_alt', ['service' => $title]) }}"
    >
    <div class="mt-auto flex flex-col">
        <x-ui.badge class="text-xs! lg:text-base!">
            {{$title}}
        </x-ui.badge>
        <p class="mt-4 text-lg lg:text-xl font-semibold text-gray-700">
            <span class="text-accent-content">
                {{$descriptionHighlight}}
            </span>
            {{$description}}
        </p>
        <flux:button
          variant="primary"
          class="w-full max-w-xs active:bg-accent/90 mt-6"
        >
            {{ __('pages/home.services.button') }}
            <x-heroicon-c-arrow-up-right class="size-5 ml-2"/>
        </flux:button>
    </div>
</div>
</a>
