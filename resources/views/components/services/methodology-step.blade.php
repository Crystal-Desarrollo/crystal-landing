@props([
    'title',
    'description',
    'step',
])

<div
  class="methodology-step rounded-lg drop-shadow-lg w-full max-w-md h-48 bg-white p-6"
>
    <div class="flex justify-between items-center">
        <div>
            @if(isset($icon))
                {{ $icon }}
            @endif
        </div>
        
        <div
          class="h-8 w-8 rounded-full border border-accent bg-accent grid place-items-center text-lg text-accent-foreground"
        >
            {{$step}}
        </div>
    </div>
    
    <div class="flex flex-col gap-2 mt-4">
        <h3 class="text-xl font-bold text-accent-content">{{$title}}</h3>
        <p class="step-description">{{$description}}</p>
    </div>
</div>