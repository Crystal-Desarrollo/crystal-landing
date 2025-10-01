<div class="container mx-auto flex flex-col items-center mt-6 lg:mt-16">
    <x-ui.title badge-text="Clientes">
        Conocé los <span class="text-accent-content">casos de éxito</span> de quienes ya confian en nosotros.
    </x-ui.title>
    
    <x-projects.projects-list :projects="$projects"/>
    
    <a
      href="{{route('projects.index')}}"
      rel="noopener noreferrer"
      class="px-4 py-2 mt-6 w-full lg:max-w-40 justify-center text-center lg:text-xl rounded-full bg-accent hover:bg-accent/90 text-white inline-flex items-center gap-2"
    >
        Ver todos
    </a>
</div>
