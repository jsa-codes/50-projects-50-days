const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// Add event listener so we can listen for a click.
toggle.addEventListener('click', () => nav.classList.toggle('active'))