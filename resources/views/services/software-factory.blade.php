<x-layout.layout>
    <div class="container mx-auto">
        <x-ui.title badge-text="Servicio">
            Software Factory
        </x-ui.title>
        
        <p class="text-gray-800 text-xl xl:text-4xl mt-2">
            Conocé nuestra metodología que garantiza <span class="text-accent-content">calidad y eficiencia</span> en el
            desarrollo de soluciones de software.
        </p>
        
        <div
          class="flex flex-col items-center gap-8 rounded-full h-[50vw] w-[50vw] mx-auto my-6 xl:my-24 relative"
        >
            <x-services.methodology-step
              title="Discovery"
              description="Entendemos tus necesidades y objetivos para definir el alcance del proyecto."
              step="1"
            >
                <x-slot name="icon">
                    <x-heroicon-o-magnifying-glass class="size-10 xl:size-12  text-accent-content"/>
                </x-slot>
            </x-services.methodology-step>
            
            <x-services.methodology-step
              title="Development"
              description="Diseñamos y desarrollamos tu software a medida, asegurando calidad y funcionalidad."
              step="2"
            >
                <x-slot name="icon">
                    <x-heroicon-o-code-bracket class="size-10 xl:size-12  text-accent-content"/>
                </x-slot>
            </x-services.methodology-step>
            
            <x-services.methodology-step
              title="Launch"
              description="Lanzamos tu solución al mercado"
              step="3"
            >
                <x-slot name="icon">
                    <x-heroicon-o-rocket-launch class="size-10 xl:size-12  text-accent-content"/>
                </x-slot>
            </x-services.methodology-step>
            
            <x-services.methodology-step
              title="Iterate"
              description="Recolectamos feedback y mejoramos tu software para maximizar su impacto."
              step="4"
            >
                <x-slot name="icon">
                    <x-heroicon-o-arrow-path class="size-10 xl:size-12  text-accent-content"/>
                </x-slot>
            </x-services.methodology-step>
            
            <x-services.methodology-step
              title="Maintain & Scale"
              description="Ofrecemos soporte continuo para asegurar el rendimiento y evolución de tu software."
              step="5"
            >
                <x-slot name="icon">
                    <x-heroicon-o-circle-stack class="size-10 xl:size-12  text-accent-content"/>
                </x-slot>
            </x-services.methodology-step>
        </div>
    </div>
</x-layout.layout>