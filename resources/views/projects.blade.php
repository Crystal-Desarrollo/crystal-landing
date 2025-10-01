<x-layout.layout>
    <div class="container mx-auto py-8 lg:py-16">
        
        <x-ui.title badge-text="Clientes">
            Conocé los <span class="text-accent-content">casos de éxito</span> de quienes ya confian en nosotros.
        </x-ui.title>
        
        <x-projects.projects-list :projects="$projects"/>
    </div>
</x-layout.layout>