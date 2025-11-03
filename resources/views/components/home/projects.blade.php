<div class="container mx-auto flex flex-col items-center mt-6 lg:mt-16">
    <x-ui.title badge-text="{{ __('pages/home.projects.badge') }}">
        {!! __('pages/home.projects.title') !!}
    </x-ui.title>
    
    <x-projects.projects-list :projects="$projects"/>
    
    <a
      href="{{route('projects.index')}}"
      rel="noopener noreferrer"
      class="px-4 py-2 mt-6 w-full lg:max-w-40 justify-center text-center lg:text-xl rounded-full bg-accent hover:bg-accent/90 text-white inline-flex items-center gap-2"
    >
        {{ __('pages/home.projects.view_all') }}
    </a>
</div>
