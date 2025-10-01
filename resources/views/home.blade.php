<x-layout.layout>
    
    <div class="flex flex-col gap-8">
        <x-home.hero/>
        
        <x-home.cta/>
        
        <x-home.projects :projects="$projects"/>
        
        <x-home.services/>
        
        <x-home.testimonials/>
        
        <x-home.team/>
    </div>
</x-layout.layout>
