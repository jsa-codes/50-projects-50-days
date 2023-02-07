/* 
ALGORITHM:
- Bring in toggle buttons (querySelectorAll)
- Loop through nodeList (forEach)
- Add click event (addEventListener)
- Toggle the active class on the parent node ('.parentNode' and classList.toggle())
*/



/* 
    HOW THIS WORKS ------------------------
    - For each toggle button, we want to take that specific button 
    and add an event listener.
    - We want to listen for a click event
    - When that happens we're going to run a function
    - That takes that button and accesses the parent node, then accesses the classList
    and call the 'toggle' method, and toggle the active class on the parent node.
*/

const toggleBtn = document.querySelectorAll('.faq-toggle')

toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
})