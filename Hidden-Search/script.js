// Grab each element by its class name
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// Adding event listener to the button
// The event is going to be a click event
// When the button is clicked we are going to call the arrow function
// Taking the search's classList and toggle its class (add and remove)
// And set focus on the input using the focus method
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})