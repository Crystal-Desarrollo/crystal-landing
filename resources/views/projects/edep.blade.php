<x-layout.layout>
    <div class="p-8">
        <div class="container mx-auto flex flex-col justify-between gap-16 h-full">
            <x-ui.title badge-text="Proyecto">
                Escuela de Desarrollo Económico y Productivo de Jujuy
            </x-ui.title>
        </div>
    </div>
    
    <div class="py-6 lg:py-16">
        <div class="container mx-auto flex flex-col  lg:gap-32">
            <div class="flex justify-center items-center gap-8">
                <div class="grow max-w-1/2 ">
                    <h4 class="text-lg xl:text-xl font-semibold">
                        {{__("pages/projects/edep.about_title")}}
                    </h4>
                    <p class="text-gray-800 text-lg xl:text-xl mt-2 text-balance">
                        {{__("pages/projects/edep.about_description")}}
                    </p>
                </div>
                
                <img
                  alt="Project image"
                  src="{{asset('assets/projects/edep-cover.png')}}"
                  class="max-h-96 w-max"
                />
            </div>
        </div>
    </div>
    
    <div class="py-6 lg:py-16 bg-gradient-to-br  from-[#13304d]/80 to-[#13304d]">
        <div class="container mx-auto flex flex-col  lg:gap-32">
            <div class="flex justify-between items-center gap-8">
                <img
                  alt="Project image"
                  src="{{asset('assets/projects/jujuymodels.png')}}"
                  class="max-h-96 w-max"
                />
                <div class="grow max-w-1/2 text-white">
                    <h4
                      class="text-lg xl:text-xl font-semibold"
                    >{{__("pages/projects/edep.project_title")}}</h4>
                    <p class=" text-lg xl:text-xl mt-2 text-balance">
                        {{__("pages/projects/edep.project_description")}}
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="bg-black pb-16">
        
        <div class="max-w-2xl mx-auto p-16">
            <p class="text-white text-lg xl:text-xl mt-2 leading-relaxed text-center italic mb-12">
                &quot;{{__("pages/projects/edep.review.comment")}}&quot;
            </p>
            
            <h5 class="text-gray-200 font-semibold">{{__("pages/projects/edep.review.name")}}</h5>
            <h6 class="font-thin text-gray-400">{{__("pages/projects/edep.review.role")}}</h6>
        </div>
    
    </div>
</x-layout.layout>