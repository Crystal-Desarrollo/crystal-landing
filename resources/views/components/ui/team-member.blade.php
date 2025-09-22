@props(['image', 'name', 'role', 'description' => null])

<div
  {{$attributes->merge(['class' => 'relative w-full p-6 pb-0 flex justify-center bg-gradient-to-b to-accent from-accent/80 rounded-xl drop-shadow-xl group overflow-hidden'])}}
>
    <div
      class="absolute inset-0 rounded-full blur-3xl opacity-40"
      style="background: radial-gradient(circle, white 0%, transparent 80%);"
    ></div>
    <div class="h-80 flex pt-12">
        <img
          src="{{$image}}"
          class="h-full w-auto object-contain duration-500 scale-110 group-hover:scale-105 transition ease-in-out"
          alt="Custom software illustration"
        >
    </div>
    
    <div
      class="absolute bottom-0 left-0 right-0 h-full
      translate-y-0 md:translate-y-[75%] md:group-hover:translate-y-0 transition-all duration-500 rounded-b-3xl flex flex-col"
    >
        <div class="p-4">
            <h4 class="text-white font-bold text-xl lg:text-2xl">{{$name}}</h4>
            <p class="text-white lg:text-lg italic">{{$role}}</p>
        </div>
        
        @if($description)
            <p class="text-white mt-auto text-sm lg:text-base leading-relaxed p-4 rounded-lg">
                {{$description}}
            </p>
        @endif
    </div>
</div>