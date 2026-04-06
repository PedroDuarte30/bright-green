document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('#mobile-menu i');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            if (navLinks.classList.contains('active')) {
                menuIcon.setAttribute('class', 'ri-close-line');
            } else {
                menuIcon.setAttribute('class', 'ri-menu-5-line');
            }
        });
    }

    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.setAttribute('class', 'ri-menu-5-line');
        });
    });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled');
    }
});