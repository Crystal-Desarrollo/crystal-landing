import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Chart from 'chart.js/auto';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Ensure Chart.js is globally available
window.Chart = Chart;

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
});

function initializeAnimations() {
    // Hero section animations
    initHeroAnimations();
    // Team section animations
    initTeamSectionAnimations();
}

function initHeroAnimations() {
    // Set initial states for animations
    gsap.set('.hero-badge', {opacity: 0, y: 20});
    gsap.set('.hero-title', {opacity: 0, y: 30});
    gsap.set('.hero-subtitle', {opacity: 0, y: 20});
    gsap.set('.hero-image-container', {opacity: 0, scale: 0.9});
    gsap.set('.hero-bottom-text', {opacity: 0, y: 30});
    gsap.set('.purple-section', {opacity: 0, x: -100});
    gsap.set('.hero-project-1', {opacity: 0, x: 50});
    gsap.set('.metrics-block', {opacity: 0, y: 50});

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
        .to('.purple-section', {
            duration: 1,
            opacity: 1,
            x: '5%',
            ease: 'power2.out',
        }, '-=0.5')
        .to('.hero-project-1', {
            duration: 0.8,
            opacity: 1,
            x: 0,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.metrics-block', {
            duration: 0.8,
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
}

function initTeamSectionAnimations() {
    // Set initial states
    gsap.set('.team-title', {opacity: 0, y: 30});
    gsap.set('.team-member-card', {opacity: 0, y: 40});

    // Animate title when section enters viewport
    gsap.to('.team-title', {
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%',
            once: true
        },
        duration: 0.7,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    // Animate team member cards with stagger
    gsap.to('.team-member-card', {
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%',
            once: true
        },
        duration: 0.7,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        stagger: 0.15
    });
}

function initInfiniteMarquee() {
    const marqueeContainer = document.querySelector('.testimonials-marquee');

    if (!marqueeContainer) return;

    // Clone the original content to create seamless loop
    const originalContent = marqueeContainer.innerHTML;
    marqueeContainer.innerHTML = originalContent + originalContent;

    // Get all testimonial items for width calculation
    const testimonials = marqueeContainer.children;
    let totalWidth = 0;

    // Calculate total width including gaps
    for (let i = 0; i < testimonials.length / 2; i++) {
        totalWidth += testimonials[i].offsetWidth + 32; // 32px for gap-8
    }

    // Set initial position to 0
    gsap.set(marqueeContainer, {x: 0});

    // Create the infinite loop animation
    const tl = gsap.timeline({repeat: -1});

    tl.to(marqueeContainer, {
        x: -totalWidth,
        duration: 30, // Adjust speed (higher = slower)
        ease: 'none',
        onComplete: () => {
            // Reset position seamlessly
            gsap.set(marqueeContainer, {x: 0});
        }
    });

    // Pause animation on hover for better UX
    marqueeContainer.addEventListener('mouseenter', () => {
        tl.pause();
    });

    marqueeContainer.addEventListener('mouseleave', () => {
        tl.resume();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    initInfiniteMarquee();
});
