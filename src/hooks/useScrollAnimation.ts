
import { useEffect, useState, useCallback } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling to sections when clicking on nav links
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the height of the navbar to offset the scrolling
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      const sectionTop = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      // Set active section immediately for better UX
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animate sections that appear in the viewport
      const fadeSections = document.querySelectorAll('.fade-in-section');
      
      fadeSections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const sectionBottom = (section as HTMLElement).getBoundingClientRect().bottom;
        
        // If the section is in the viewport
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
          section.classList.add('is-visible');
        } else if (sectionBottom < 0 || sectionTop > window.innerHeight) {
          // Remove the visible class when scrolling away to reset animation
          section.classList.remove('is-visible');
        }
      });

      // Determine which section is currently in view for navigation highlighting
      const sections = document.querySelectorAll('section[id]');
      // Get the height of the navbar to adjust the scroll position calculation
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const scrollPosition = window.scrollY + navbarHeight + 100; // Added offset to trigger section change earlier

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Call once to initialize
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, activeSection, scrollToSection };
}
