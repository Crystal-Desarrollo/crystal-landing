@props(['class' => ''])

<span
  {{ $attributes->merge(['class' => "w-max text-gray-600 text-sm lg:text-xl rounded-full border border-gray-400 max-w-max px-4 py-0.5 $class"]) }}
>
    {{$slot}}
</span>