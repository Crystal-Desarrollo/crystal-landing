<div
  class="testimonial flex flex-col items-center text-center gap-6 w-lg p-8 bg-white rounded-2xl shadow-lg"
>
    <div class="text-gray-600 text-xl">{{ $quote }}</div>
    <div class="w-full flex items-center justify-start gap-6 mt-auto">
        <flux:avatar size="xl" circle="true" src="{{ $image }}" alt="{{ $name }}"/>
        
        <div class="text-left flex flex-col gap-1">
            <div class="font-semibold text-xl">{{ $name }}</div>
            <div class="text-lg text-gray-500">{{ $position }}</div>
        </div>
    </div>
</div>
