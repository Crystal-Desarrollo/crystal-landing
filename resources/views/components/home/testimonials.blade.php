<header class="container mx-auto flex flex-col relative">
    <x-ui.title badge-text="{{ __('pages/home.testimonials.badge') }}">
        {{ __('pages/home.testimonials.title') }}
    </x-ui.title>
    
    <div class="flex overflow-hidden p-2 relative">
        <!-- Left Blur -->
        <div
          class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"
        ></div>
        
        <div class="testimonials-marquee flex gap-8">
            <x-ui.testimonial
              image="/path/to/image1.jpg"
              quote="{{ __('pages/home.testimonials.testimonial_1.quote') }}"
              name="{{ __('pages/home.testimonials.testimonial_1.name') }}"
              position="{{ __('pages/home.testimonials.testimonial_1.position') }}"
            />
            <x-ui.testimonial
              image="/path/to/image2.jpg"
              quote="{{ __('pages/home.testimonials.testimonial_2.quote') }}"
              name="{{ __('pages/home.testimonials.testimonial_2.name') }}"
              position="{{ __('pages/home.testimonials.testimonial_2.position') }}"
            />
            <x-ui.testimonial
              image="/path/to/image3.jpg"
              quote="{{ __('pages/home.testimonials.testimonial_3.quote') }}"
              name="{{ __('pages/home.testimonials.testimonial_3.name') }}"
              position="{{ __('pages/home.testimonials.testimonial_3.position') }}"
            />
            <x-ui.testimonial
              image="/path/to/image4.jpg"
              quote="{{ __('pages/home.testimonials.testimonial_4.quote') }}"
              name="{{ __('pages/home.testimonials.testimonial_4.name') }}"
              position="{{ __('pages/home.testimonials.testimonial_4.position') }}"
            />
            <x-ui.testimonial
              image="/path/to/image5.jpg"
              quote="{{ __('pages/home.testimonials.testimonial_5.quote') }}"
              name="{{ __('pages/home.testimonials.testimonial_5.name') }}"
              position="{{ __('pages/home.testimonials.testimonial_5.position') }}"
            />
        </div>
        
        <!-- Right Blur -->
        <div
          class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"
        ></div>
    </div>
</header>
