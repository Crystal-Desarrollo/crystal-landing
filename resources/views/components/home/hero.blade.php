<div class="relative flex items-center overflow-hidden">
    {{--    <!-- Background decorative elements  -->--}}
    {{--    <div class="absolute inset-0 overflow-hidden pointer-events-none">--}}
    {{--        <div--}}
    {{--          class="hidden md:block absolute -top-40 -right-32 w-80 h-80 rounded-full opacity-50"--}}
    {{--          style="background-color: color-mix(in srgb, var(--primary) 20%, transparent)"--}}
    {{--        ></div>--}}
    {{--        <div class="hidden md:block absolute top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30"></div>--}}
    {{--        <div--}}
    {{--          class="hidden md:block absolute bottom-40 right-20 w-32 h-32 rounded-full opacity-40"--}}
    {{--          style="background-color: color-mix(in srgb, var(--primary) 20%, transparent)"--}}
    {{--        ></div>--}}
    {{--    </div>--}}
    
    <div
      class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center"
    >
        <!-- Main Content -->
        <div class="space-y-8 w-full max-w-4xl text-center">
            <div class="space-y-6">
                <div
                  class="text-gray-600 text-sm lg:text-xl rounded-full border border-gray-400 max-w-max px-4 py-0.5 mx-auto"
                >
                    Desarrollo de software a la medida
                </div>
                
                <h1
                  size="xl"
                  class="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold  text-gray-900 text-pretty"
                >
                    <span class="text-accent">Transformamos</span>
                    ideas en soluciones de software
                </h1>
                
                <flux:subheading class="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                    Somos tu socio estratégico en desarrollo de software, estamos
                    comprometidos con la calidad, seguridad e innovación continua.
                </flux:subheading>
            </div>
            
            <div class="relative h-[50vh] lg:h-[60vh] mt-16 lg:mt-0">
                <div
                  class="h-[50vh] border border-slate-300 rounded-2xl absolute w-full mt-6 hidden lg:flex"
                >
                    <flux:button
                      variant="primary"
                      class="!hidden lg:block! mx-auto -translate-y-1/2 text-xl"
                    >
                        <span class="flex items-center justify-center gap-2">
                            Get started
                            <x-heroicon-c-arrow-up-right class="size-6"/>
                        </span>
                    </flux:button>
                
                </div>
                
                <!-- macOS-style frame container -->
                <div
                  class="absolute w-full rounded-xl border h-[50vh] border-slate-300 max-w-xl left-1/2 -translate-x-1/2 lg:mt-32"
                >
                    <!-- macOS title bar with buttons -->
                    <div class=" px-4 py-3 flex items-center border-b border-b-slate-300">
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
                    <div>
                        <img
                          src="{{asset('assets/hero-woman.png')}}" alt="A woman using a laptop"
                          class="h-[40vh] w-full object-contain scale-150 top-0 -right-4 absolute"
                        >
                    </div>
                </div>
                
                <div
                  class="w-full max-w-md xl:max-w-lg bg-black rounded-2xl h-40 z-40 absolute hidden lg:flex -translate-x-1/3 top-1/2  justify-between"
                >
                    <div class="flex flex-col items-start max-w-2/3 p-6 gap-2">
                        <p class="text-gray-400 text-base xl:text-xl text-pretty text-left">Simplifica tu camino al
                            éxito</p>
                        <h3 class="text-white font-bold text-xl xl:text-2xl text-left text-pretty">Convierte tus ideas
                            en
                            realidad.</h3>
                    </div>
                    
                    <div class="flex items-end">
                        <div class="bg-accent-content/40 h-[40%] w-16 rounded-t-lg"></div>
                        <div class="bg-accent-content/60 h-[60%] w-16 rounded-t-lg"></div>
                        <div class="bg-accent-content h-[80%] w-16 rounded-t-lg"></div>
                    </div>
                </div>
            
            </div>
            
            <!-- Bottom section with secondary headline -->
            <p
              class="text-2xl sm:text-2xl lg:text-5xl text-gray-900 leading-tight text-left font-extrabold mt-12 lg:mt-24"
            >
                Acelera tu éxito tecnológico
                <span class="block text-stone-400">con la forma más eficiente de ampliar tu equipo de desarrollo de software.</span>
            </p>
            
            <flux:button
              variant="primary"
              class="lg:hidden! text-xl"
            >
                <span class="flex items-center justify-center gap-2">
                    Get started
                    <x-heroicon-c-arrow-up-right class="size-6"/>
                </span>
            </flux:button>
        </div>
    </div>
</div>