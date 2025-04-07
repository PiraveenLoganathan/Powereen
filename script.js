document.addEventListener('DOMContentLoaded', function() {
    // Toggle Dropdown Menu for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  
    // Sticky header effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Smooth scrolling for internal anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.remove('open'); // Close mobile nav
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Fade-in sections on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1 };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    // Toggle the Project Progress dropdown inside Impact section
    const toggleProgressBtn = document.getElementById('toggleProgress');
    const progressDropdown = document.getElementById('progressDropdown');
    toggleProgressBtn.addEventListener('click', function() {
      progressDropdown.classList.toggle('open');
    });
  
    // Animate progress bar to a fixed 33% (Research Phase)
    const progressFill = document.getElementById('progressFill');
    const phaseText = document.getElementById('phaseText');
    phaseText.textContent = "Research Phase";
    let currentWidth = 0;
    const targetWidth = 33;
    const interval = setInterval(() => {
      currentWidth++;
      progressFill.style.width = currentWidth + "%";
      if (currentWidth >= targetWidth) {
        clearInterval(interval);
      }
    }, 20);
  });
  