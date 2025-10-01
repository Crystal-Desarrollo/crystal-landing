@props([
    'title',
    'href',
    'src',
    'class' => '',
])

<a
  href="{{$href ?? '#'}}"
  class="relative overflow-hidden group rounded-2xl drop-shadow-2xl w-full max-w-md h-80 lg:min-h-80 p-8 flex flex-col justify-start lg:flex-row gap-4 lg:gap-6 {{$class}}"
>
    <div class="flex items-center justify-between h-min w-full">
        <h3 class="font-semibold text-2xl lg:text-3xl max-w-min leading-relaxed tracking-wider">{!! $title !!}</h3>
        
        <div
          class="border border-white rounded-full p-3 h-14 w-14 hover:bg-white hover:text-black grid place-items-center duration-300"
        >
            <x-heroicon-o-arrow-right/>
        </div>
    </div>
    
    <div
      class="absolute -bottom-1/4 lg:-bottom-1/4 -right-[1%] lg:-right-1/9 h-60 group-hover:-translate-y-1/12 duration-300"
    >
        <img
          alt="Proyecto {{$title}}" src="{{$src}}" class="h-60 w-full object-contain rounded-xl lg:h-48"
        />
    </div>
</a>