// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Exclude links that point to external files (like the CV PDF) from smooth scrolling
        if (this.getAttribute('href').endsWith('.pdf')) {
            return; // Allow the default behavior for PDF links
        }

        e.preventDefault(); // Prevent default anchor behavior for non-PDF links

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


const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position

    sections.forEach(section => {
        // Skip processing for the hero section
        if (section.id === 'home') {
            section.classList.add('visible'); // Ensure it is always visible
            return;
        }

        const sectionTop = section.offsetTop - window.innerHeight + 100; // When section is visible
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
