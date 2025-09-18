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