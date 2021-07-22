const navToggle = document.getElementById('nav-toggle');
const links = document.querySelector('.list-no-bullet-r');

console.log(links);
navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
})