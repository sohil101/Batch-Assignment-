document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const switchModeButton = document.querySelector('.switch-mode');
    const body = document.body;
    const icon = switchModeButton.querySelector('i');
    const logoImg = document.querySelector('.logo-nav-img');
    const footerImg = document.querySelector('.contact-left-footer img');


    switchModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const allTextElements = document.querySelectorAll('body *');
        allTextElements.forEach(element => {
            element.classList.toggle('dark-text');
        });
        
        if (body.classList.contains('dark-mode')) {
            logoImg.src = 'image/logo-white.png';
        } else {
            logoImg.src = 'image/logo.png';
        }

        if (body.classList.contains('dark-mode')) {
            footerImg.src = 'image/logo-white.png';
        } else {
            footerImg.src = 'image/logo.png';
        }

        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});