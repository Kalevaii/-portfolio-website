// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID from href
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                behavior: 'smooth' // Smooth scroll
            });
        }
    });
});

// Hero Animation
const heroContent = document.querySelector('.hero-content');
window.addEventListener('load', () => {
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease'; // Set transition effects
    heroContent.style.opacity = 1; // Set opacity to visible
    heroContent.style.transform = 'translateY(0)'; // Reset transform to original position
});

// Scroll Animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position

    // Section fade-in animation
    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight + 100; // Calculate when section should be visible
        if (scrollPosition > sectionTop) {
            section.classList.add('visible'); // Add visible class to fade in the section
        }
    });
});

// Navbar Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
