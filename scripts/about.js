// Show/hide mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

const navAtags = nav.querySelectorAll('a');

hamburger.onclick = () => {
  nav.classList.remove('mobile-hide');
};

navAtags.forEach((a) => {
  a.onclick = () => {
    nav.classList.add('mobile-hide');
  };
});