// We have multiple counters so we need to use querySelectorAll.
// This will give us a node list, which is similar to an array.
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => { 
    counter.innerText = 0

    const updateCounter = () => {
        // The plus sign (+) turns the counter into a numnber instead of a string.
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText

        // Target is the initial value set as the value of data-target and is then divided by 200.
        // This is how each counter will increment.
        const increment = target / 200

        if(c < target) {
            // Math.ceil is going to round this number up.
            counter.innerText = `${Math.ceil(c + increment)}`
            // Wait a millisecond before increment
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})