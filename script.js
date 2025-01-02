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






