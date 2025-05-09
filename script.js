document.addEventListener("DOMContentLoaded", function () {
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            console.log('Form submitted:', { name, email });
            alert('Thank you for your message!');
        });
    }

    // Hamburger menu handling
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('show');
        });

        document.addEventListener('click', function (e) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                mobileMenu.classList.remove('show');
            }
        });
    }

    // Sticky Header on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Intersection Observer for detecting when images come into view
    const images = document.querySelectorAll('.facts img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after the image is visible
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the image is in view
    });

    // Observe each image
    images.forEach(image => {
        observer.observe(image);
    });
});