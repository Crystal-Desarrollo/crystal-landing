@props([
    'title',
    'src',
    'routeName' => '',
    'class' => '',
])

<a
  href="{{route($routeName)}}"
  class="relative overflow-hidden group rounded-2xl drop-shadow-2xl w-full max-w-md h-80 lg:min-h-80 p-8 flex flex-col justify-start lg:flex-row gap-4 lg:gap-6 {{$class}}"
>
    <div class="flex justify-between h-min w-full gap-2">
        <h3 class="font-semibold text-xl lg:text-2xl leading-relaxed tracking-wider">{!! $title !!}</h3>
        
        <div
          class="shrink-0 border border-white rounded-full p-3 h-14 w-14 group-hover:bg-white group-hover:text-black grid place-items-center duration-300"
        >
            <x-heroicon-o-arrow-right/>
        </div>
    </div>
    
    <div
      class="absolute -bottom-1/6 lg:-bottom-1/4 -right-[1%] lg:-right-1/9 h-60  group-hover:scale-110 duration-300"
    >
        <img
          alt="Proyecto {{$title}}" src="{{$src}}" class="h-44 w-full object-contain rounded-xl lg:h-48"
        />
    </div>
</a>