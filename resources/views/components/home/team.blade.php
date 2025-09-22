<header
  class="team-section container mx-auto flex flex-col gap-8 items-center py-16"
>
    <x-ui.title badge-text="Nuestro equipo">
        <span class="team-title">Conoce a nuestro equipo de expertos al frente de tu proyecto</span>
    </x-ui.title>
    
    <div class="team-members w-full grid lg:grid-cols-3 gap-8 lg:gap-16">
        
        <x-ui.team-member
          class="team-member-card"
          name="Facundo"
          role="Project Manager"
          image="{{asset('assets/team/facu.png')}}"
        />
        
        <x-ui.team-member
          class="team-member-card"
          name="Agustin"
          role="Desarrollador Full Stack"
          image="{{asset('assets/team/agus.png')}}"
        />
        
        <x-ui.team-member
          class="team-member-card"
          name="Nicolás"
          role="Desarrollador Full Stack"
          image="{{asset('assets/team/nico.png')}}"
        />
    
    </div>
</header>
