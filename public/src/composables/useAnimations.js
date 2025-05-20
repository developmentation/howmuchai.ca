import { ref } from 'vue';
import { gsap } from 'gsap';

export function useAnimations() {
  // Animate hero elements with GSAP
  const animateHeroElements = () => {
    // Create a timeline for hero section animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Animate hero elements
    tl.from('.hero-title', { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    })
    .from('.hero-subtitle', { 
      y: 20, 
      opacity: 0, 
      duration: 0.6 
    }, '-=0.4')
    .from('.hero-button', { 
      y: 20, 
      opacity: 0, 
      stagger: 0.2, 
      duration: 0.6 
    }, '-=0.3')
    .from('.hero-image', { 
      x: 30, 
      opacity: 0, 
      duration: 0.8 
    }, '-=0.6');
    
    return tl;
  };
  
  // Animate sections on scroll
  const animateOnScroll = () => {
    // Use Intersection Observer to detect when sections are in view
    const sections = document.querySelectorAll('.animate-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return observer;
  };
  
  return {
    animateHeroElements,
    animateOnScroll
  };
}
