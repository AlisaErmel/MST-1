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
            e.stopPropagation();  // Prevent the click event from propagating to the document
            mobileMenu.classList.toggle('show');  // Toggle the "show" class
        });

        // Close the menu when clicking anywhere outside
        document.addEventListener('click', function (e) {
            // Check if the click was outside the menu and hamburger
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                mobileMenu.classList.remove('show');  // Close the menu
            }
        });
    }
});
