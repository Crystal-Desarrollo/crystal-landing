@props(['class' => '', 'badgeText' => ''])

<div class="flex flex-col gap-4">
    <x-ui.badge class="self-start">
        {{ $badgeText }}
    </x-ui.badge>
    <p
      class="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight text-left text-pretty font-bold"
    >
        {{ $slot }}
    </p>
</div>