// Get divs with a class of 'small-cup' from the DOM
const smallCups = document.querySelectorAll('.cup-small')

// Get item with the id of 'liter', 'percentage' AND 'remaining'
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')

// Loop through all of the "cup-small" elements using the forEach method
smallCups.forEach((cup, index) => {
    // Add event listener that listens for a click event on each cup
        cup.addEventListener('click', () => {
            // Function 
            highlightCups(index)
        })
})

function highlightCups(index) {
    // In order to toggle the last cup of the cups that are full
        // Check to see if the last cup is full and the one after it is not THEN...
            // We want to decrease the index by one
            // The index of the element that was clicked
                // Check to see if it has a class of 'full'
                    // THEN check to see if the element after it doesn't have a class of 'full'
                        // IF it does not then take the current index and decrement by one.
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    // For each cup check 
    smallCups.forEach((cup, index2) => {
        // IF the index of the cups in the loop are less than or equal to the cup we clicked on.
        if (index2 <= index) {
            // IF so, the add the class of 'full'
            cup.classList.add('full')
        } else {
            // IF NOT, then remove the class of 'full'
            cup.classList.remove('full')
        }
    })

}