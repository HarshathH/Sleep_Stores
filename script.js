document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    mobileMenuToggle.addEventListener('click', function () {
        if (nav.classList.contains('show')) {
            // If the menu is currently shown, hide it and show the hamburger icon
            nav.classList.remove('show');
            mobileMenuToggle.innerHTML = '&#9776;'; // Hamburger icon
        } else {
            // If the menu is currently hidden, show it and show the cross symbol
            nav.classList.add('show');
            mobileMenuToggle.innerHTML = '&#10005;'; // Cross symbol
        }
    });

    // Close the menu when clicking anywhere on the document
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            nav.classList.remove('show');
            mobileMenuToggle.innerHTML = '&#9776;'; // Reset to hamburger icon
        }
    });
});