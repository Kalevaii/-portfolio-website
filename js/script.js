document.addEventListener("DOMContentLoaded", () => {
    const typedTarget = document.querySelector(".pro-text");

    if (typedTarget && typeof Typed !== "undefined") {
        new Typed(".pro-text", {
            strings: [
                "AI-powered systems",
                "scalable web applications",
                "cloud-focused solutions",
                "high performance projects"
            ],
            typeSpeed: 65,
            backSpeed: 38,
            backDelay: 1400,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    reveals.forEach(item => revealObserver.observe(item));

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.getElementById("header");

    const setActiveLink = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", setActiveLink);
    setActiveLink();

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("open");
            document.body.classList.toggle("menu-open");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("open");
                document.body.classList.remove("menu-open");
            });
        });
    }

    const glow = document.querySelector(".cursor-glow");

    if (glow && window.innerWidth > 768) {
        window.addEventListener("mousemove", e => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }
});