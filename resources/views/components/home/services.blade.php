<header
  class="container mx-auto flex flex-col gap-8 items-center py-16"
>
    <x-ui.title badge-text="Servicios">
        Sabemos que cada empresa es única. Descubre cómo nuestras soluciones personalizadas ayudan a alcanza tus
        objetivos específicos.
    </x-ui.title>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <x-ui.service
          title="Software a medida"
          descriptionHighlight="Soluciones de software"
          description="a la medida que se adaptan a las necesidades únicas de tu empresa."
          image="{{asset('assets/services/custom-software.png')}}"
          href="#"
        />
        <div
          class="row-span-2  bg-white hidden lg:flex drop-shadow-xl rounded-4xl w-full aspect-square lg:aspect-auto flex-col p-10 relative hover:scale-105 transition-all duration-300"
        >
        </div>
        <x-ui.service
          title="Branding & Diseño UI/UX"
          descriptionHighlight="Construimos marcas"
          description="que cuentan historias y diseñamos experiencias digitales que enamoran."
          image="{{asset('assets/services/branding.png')}}"
          href="#"
        />
        <x-ui.service
          title="Soporte Técnico Integral"
          descriptionHighlight="Mantenemos tu infraestructura"
          description="funcionando de forma segura y estable para que tu empresa no se detenga nunca."
          image="{{asset('assets/services/infrastructure.png')}}"
          href="#"
        />
        <x-ui.service
          title="Soluciones Express"
          descriptionHighlight="Nuestras soluciones listas"
          description="resuelven necesidades específicas sin el costo del desarrollo a medida."
          image="{{asset('assets/services/saas.png')}}"
          href="#"
        />
    </div>
</header>
