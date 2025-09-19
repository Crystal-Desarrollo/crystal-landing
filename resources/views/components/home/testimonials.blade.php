<header class="container mx-auto flex flex-col relative">
    <x-ui.title badge-text="Testimonios">
        Resultados que hablan por sí mismos
    </x-ui.title>
    
    <div class="flex overflow-hidden p-2 relative">
        <!-- Left Blur -->
        <div
          class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"
        ></div>
        
        <div class="testimonials-marquee flex gap-8">
            <x-ui.testimonial
              image="/path/to/image1.jpg"
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="John Doe"
              position="CEO, Company A"
            />
            <x-ui.testimonial
              image="/path/to/image2.jpg"
              quote="Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
              name="Jane Smith"
              position="CTO, Company B"
            />
            <x-ui.testimonial
              image="/path/to/image3.jpg"
              quote="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu."
              name="Alice Johnson"
              position="Manager, Company C"
            />
            <x-ui.testimonial
              image="/path/to/image4.jpg"
              quote="Fusce fermentum. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae."
              name="Bob Brown"
              position="Founder, Company D"
            />
            <x-ui.testimonial
              image="/path/to/image5.jpg"
              quote="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus."
              name="Charlie Green"
              position="Director, Company E"
            />
        </div>
        
        <!-- Right Blur -->
        <div
          class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"
        ></div>
    </div>
</header>
