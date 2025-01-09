const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav');
const navLinksItems = document.querySelectorAll('.nav a');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});