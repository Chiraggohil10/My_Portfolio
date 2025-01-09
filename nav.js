const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav');
const navLinksItems = document.querySelectorAll('.nav a');

function toggleNav() {
    navLinks.classList.toggle('active');
}

function closeNav() {
    navLinks.classList.remove('active');
}

burger.addEventListener('click', toggleNav);

navLinksItems.forEach(link => {
    link.addEventListener('click', closeNav);
});