<div class="relative flex items-center container mx-auto">
    <!-- Main Content -->
    <div class="space-y-16 w-full text-center">
        <div class="space-y-6">
            <div
              class="hero-badge text-gray-600 text-sm lg:text-xl rounded-full border border-gray-400 max-w-max px-4 py-0.5 mx-auto"
            >
                {{ __('pages/home.hero.badge') }}
            </div>
            
            <h1
              size="xl"
              class="hero-title text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold  text-gray-900 text-pretty"
            >
                <span class="text-accent">{{ __('pages/home.hero.title_highlight') }}</span>
                {{ __('pages/home.hero.title') }}
            </h1>
            
            <flux:subheading class="hero-subtitle text-base sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                {{ __('pages/home.hero.subtitle') }}
            </flux:subheading>
        </div>
        
        <div class="relative h-[50vh] lg:h-[60vh] mt-16 lg:mt-0">
            <div
              class="h-[50vh] border border-slate-300 rounded-2xl absolute w-full mt-6 hidden lg:flex animate-fade-in"
            >
                
                <flux:button
                  variant="primary"
                  class="!hidden lg:block! mx-auto -translate-y-1/2 text-xl cursor-pointer"
                >
                    <a
                      href="https://cal.com/crystal-desarrollo/contanos-tu-idea" target="_blank"
                      rel="noopener noreferrer"
                    >
                        <span class="flex items-center justify-center gap-2">
                            {{ __('pages/home.hero.button') }}
                            <x-heroicon-c-arrow-up-right class="size-6"/>
                        </span>
                    </a>
                </flux:button>
            </div>
            
            <!-- macOS-style frame container -->
            <div
              class="hero-image-container absolute w-full rounded-xl border h-[50vh] border-slate-300 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl left-1/2 -translate-x-1/2  lg:mt-32 bg-white shadow-xl"
            >
                <!-- macOS title bar with buttons -->
                <div class="flex px-4 py-3  items-center border-b border-b-slate-300">
                    <div class="flex space-x-2">
                        <!-- Red button -->
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <!-- Yellow button -->
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <!-- Green button -->
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>
                
                <!-- Image content -->
                
                <div
                  class="absolute inset-0 rounded-full blur-3xl opacity-40"
                  style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);"
                ></div>
                
                <img
                  src="{{asset('assets/hero-woman.png')}}" alt="{{ __('pages/home.hero.image_alt') }}"
                  class="h-[120%] w-full object-cover absolute bottom-0"
                  {{--                  style="mask-image: linear-gradient(black 95%, transparent);"--}}
                >
            </div>
            
            <div
              class="bg-white w-48 h-48 absolute drop-shadow-2xl left-10 -top-12 rounded-2xl p-6 hidden lg:flex animate-fade-in"
            >
                <div id="pie-chart" class="w-full h-full">
                    <canvas id="pieChartCanvas"></canvas>
                </div>
                
                <script>
                    document.addEventListener('DOMContentLoaded', function () {
                        const ctx = document.getElementById('pieChartCanvas').getContext('2d');
                        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

                        // Generate lighter and darker tones of the primary color
                        const lightenColor = (color, percent) => {
                            const [l, c, h] = color.match(/oklch\(([^)]+)\)/)[1].split(' ').map(parseFloat);
                            return `oklch(${Math.min(l + percent, 1)} ${c} ${h})`;
                        };

                        const darkenColor = (color, percent) => {
                            const [l, c, h] = color.match(/oklch\(([^)]+)\)/)[1].split(' ').map(parseFloat);
                            return `oklch(${Math.max(l - percent, 0)} ${c} ${h})`;
                        };

                        const lighterPrimary = lightenColor(primaryColor, 0.1);
                        const darkerPrimary = darkenColor(primaryColor, 0.1);

                        new Chart(ctx, {
                            type: 'pie',
                            data: {
                                datasets: [{
                                    data: [30, 70],
                                    backgroundColor: [primaryColor, lighterPrimary, darkerPrimary],
                                    borderWidth: 0, // Remove spacing between chart portions
                                }]
                            },
                            options: {
                                responsive: true,
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                            },
                        });
                    });
                </script>
            </div>
            
            {{-- Purple bars --}}
            <div
              class="purple-section w-full max-w-md xl:max-w-lg bg-black rounded-2xl h-40 absolute hidden lg:flex top-1/2  justify-between overflow-hidden animate-fade-in"
            >
                <div class="flex flex-col items-start max-w-2/3 p-6 gap-2">
                    <p
                      class="text-gray-400 text-base xl:text-xl text-pretty text-left"
                    >{{ __('pages/home.hero.purple_section_text') }}</p>
                    <h3
                      class="text-white font-bold text-xl xl:text-2xl text-left text-pretty"
                    >{{ __('pages/home.hero.purple_section_title') }}</h3>
                </div>
                
                <div class="flex items-end">
                    <div class="bg-accent-content/40 h-[40%] w-16 rounded-t-lg"></div>
                    <div class="bg-accent-content/60 h-[60%] w-16 rounded-t-lg"></div>
                    <div class="bg-accent-content h-[80%] w-16 rounded-t-lg"></div>
                </div>
            </div>
            
            <div
              class="bg-white w-auto h-40 aspect-video absolute drop-shadow-2xl -right-10 -top-10 rounded-2xl hidden lg:flex hero-project-1"
            >
                <img src="{{asset('assets/hero-project-1.png')}}" alt="Hero project image">
            </div>
            
            <div
              class="bg-white w-48 h-48 absolute drop-shadow-2xl right-10 bottom-10 rounded-2xl p-6 hidden lg:flex flex-col justify-between metrics-block"
            >
                <div>
                    <h4 class="text-4xl text-accent-content font-bold text-left">+100</h4>
                    <p class="text-sm text-gray-500 text-left">Projects delivered</p>
                </div>
                
                <div>
                    <h4 class="text-4xl text-accent-content font-bold text-left">+30</h4>
                    <p class="text-sm text-gray-500 text-left">Happy customers</p>
                </div>
            </div>
        </div>
        
        <!-- Bottom section with secondary headline -->
        <div class="space-y-12">
            
            <p
              class="text-3xl sm:text-4xl lg:text-6xl text-accent-content leading-tight text-left font-extrabold mt-12 lg:mt-24 hero-bottom-text"
            >
                {{ __('pages/home.hero.bottom_section_title') }}
                <span
                  class="block text-gray-500"
                >{{ __('pages/home.hero.bottom_section_subtitle') }}</span>
            </p>
            
            <a href="https://cal.com/crystal-desarrollo/contanos-tu-idea" target="_blank" rel="noopener noreferrer">
                <flux:button
                  variant="primary"
                  class="lg:hidden! text-3xl! w-full max-w-sm h-14 cursor-pointer active:bg-accent/90"
                >
                <span class="flex items-center justify-center gap-2">
                    {{ __('pages/home.hero.bottom_section_button') }}
                    <x-heroicon-c-arrow-up-right class="size-6"/>
                </span>
                </flux:button>
            </a>
        </div>
    </div>
</div>
