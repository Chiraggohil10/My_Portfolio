const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav');

function toggleNav() {
    navLinks.classList.toggle('active');
}

function closeNav() {
    navLinks.classList.remove('active');
}