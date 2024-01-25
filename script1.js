document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    // Display the navigation menu by default
    nav.style.display = 'flex';

    mobileMenuToggle.addEventListener('click', function () {
        // Toggle the 'show' class and update the icon
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        updateIcon();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            nav.style.display = 'flex';
            updateIcon();
        }
    });
    function updateIcon() {
        mobileMenuToggle.innerHTML = nav.style.display === 'none' ? '&#9776;' : '&#10005;';
    }
    
});
