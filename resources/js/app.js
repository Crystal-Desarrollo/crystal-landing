import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
});

function initializeAnimations() {
    // Hero section animations
    initHeroAnimations();
}

function initHeroAnimations() {
    // Set initial states for animations
    gsap.set('.hero-badge', {opacity: 0, y: 20});
    gsap.set('.hero-title', {opacity: 0, y: 30});
    gsap.set('.hero-subtitle', {opacity: 0, y: 20});
    gsap.set('.hero-image-container', {opacity: 0, scale: 0.9});
    gsap.set('.hero-stats-card', {opacity: 0, x: -50});
    gsap.set('.hero-button', {opacity: 0, y: 20});
    gsap.set('.hero-bottom-text', {opacity: 0, y: 30});
    gsap.set('.purple-section', {opacity: 0, x: -100});

    // Create main timeline for hero animations
    const heroTimeline = gsap.timeline({delay: 0.2});

    heroTimeline
        .to('.hero-badge', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
        })
        .to('.hero-title', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
        }, '-=0.3')
        .to('.hero-subtitle', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.hero-image-container', {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: 'power2.out'
        }, '-=0.2')
        .to('.hero-stats-card', {
            duration: 0.8,
            opacity: 1,
            x: 0,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.hero-button', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
        }, '-=0.3');

    // Scroll-triggered animation for bottom text
    gsap.to('.hero-bottom-text', {
        scrollTrigger: {
            trigger: '.hero-bottom-text',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    // Add hover animations for buttons
    document.querySelectorAll('.hero-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Parallax effect for the image
    gsap.to('.hero-image', {
        scrollTrigger: {
            trigger: '.hero-image-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -50,
        ease: 'none'
    });

    // Floating animation for stats card
    gsap.to('.hero-stats-card', {
        duration: 3,
        y: -10,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
    });

    // Purple section animation - animate the entire black container as a single unit
    gsap.to('.purple-section', {
        scrollTrigger: {
            trigger: '.purple-section',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 1,
        x: '5%',
        ease: 'power2.out',
    });
}