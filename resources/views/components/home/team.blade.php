<header
  class="team-section container mx-auto flex flex-col gap-8 items-center py-16"
>
    <x-ui.title badge-text="{{ __('pages/home.team.badge') }}">
        <span class="team-title">{{ __('pages/home.team.title') }}</span>
    </x-ui.title>
    
    <div class="team-members w-full grid lg:grid-cols-3 gap-8 lg:gap-16">
        
        <x-ui.team-member
          class="team-member-card"
          name="{{ __('pages/home.team.members.facundo.name') }}"
          role="{{ __('pages/home.team.members.facundo.role') }}"
          image="{{asset('assets/team/facu.png')}}"
        />
        
        <x-ui.team-member
          class="team-member-card"
          name="{{ __('pages/home.team.members.agustin.name') }}"
          role="{{ __('pages/home.team.members.agustin.role') }}"
          image="{{asset('assets/team/agus.png')}}"
        />
        
        <x-ui.team-member
          class="team-member-card"
          name="{{ __('pages/home.team.members.nicolas.name') }}"
          role="{{ __('pages/home.team.members.nicolas.role') }}"
          image="{{asset('assets/team/nico.png')}}"
        />
    
    </div>
</header>
