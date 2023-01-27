// The element with the id of 'progress' is that which will display the progress
const progress = document.getElementById('progress');
// The Previous button has the id of 'previous' on it.
const previous = document.getElementById('previous');
// The "Next" button has the id of 'next'
const next = document.getElementById('next');
// Each of the circle divs contains the class of 'circle'
const circles = document.querySelectorAll('.circle');


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})


previous.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()

})

function update() { 
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1 ) { 
        previous.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
}

