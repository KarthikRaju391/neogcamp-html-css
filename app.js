const navToggle = document.getElementById('nav-toggle');
const links = document.querySelector('.list-no-bullet-r');
const reversed = document.querySelector('.reversed');

let i = reversed.childNodes.length;
while (i--) {
   reversed.appendChild(reversed.childNodes[i]);
}

navToggle.addEventListener('click', () => {
   links.classList.toggle('show-links');
});
