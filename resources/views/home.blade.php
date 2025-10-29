<x-layout.layout>
    
    <div class="flex flex-col gap-8 pb-4 pt-16 mx-4 sm:mx-6 lg:mx-8">
        <x-home.hero/>
        
        <x-home.cta/>
        
        <x-home.projects :projects="$projects"/>
        
        <x-home.services/>
        
        {{--        <x-home.testimonials/>--}}
        
        {{--        <x-home.team/>--}}
    </div>
</x-layout.layout>
