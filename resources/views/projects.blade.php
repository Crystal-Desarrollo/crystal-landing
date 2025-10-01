<x-layout.layout>
    
    <div class="container mx-auto">
        
        <x-ui.title badge-text="Clientes">
            Conocé los <span class="text-accent-content">casos de éxito</span> de quienes ya confian en nosotros.
        </x-ui.title>
        
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 max-w-4xl mx-auto my-8 lg:my-16">
            <div class="flex flex-col gap-10 lg:gap-20">
                <x-services.project-card
                  title="Jujuy Models"
                  class="bg-gradient-to-br from-violet-500 to-violet-700 text-white"
                  src="{{asset('assets/projects/jujuymodels.png')}}"
                />
                <x-services.project-card
                  title="EDEP"
                  class="bg-gradient-to-br from-blue-700 to-blue-900 text-white"
                  src="{{asset('assets/projects/jujuymodels.png')}}"
                />
                <x-services.project-card
                  title="Proveedores Mineros"
                  class="bg-gradient-to-br from-purple-700 to-purple-900 text-white"
                  src="{{asset('assets/projects/jujuymodels.png')}}"
                />
            </div>
            <div class="flex flex-col gap-10 lg:gap-20 lg:mt-32">
                <x-services.project-card
                  title="Cintas Calzados"
                  class="bg-gradient-to-br from-blue-500 to-blue-700 text-white row-start-2"
                  src="{{asset('assets/projects/cintas.png')}}"
                />
                <x-services.project-card
                  title="ExpoJuy"
                  class="bg-gradient-to-br from-pink-500 to-pink-700 text-white"
                  src="{{asset('assets/projects/jujuymodels.png')}}"
                />
            </div>
        
        </div>
    </div>
</x-layout.layout>