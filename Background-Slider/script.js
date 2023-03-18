const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

// Set the background of the body to the image of the slide
function setBgToBody() {
    // slides is a nodelist
    // Getting the activeSlide and setting the backgroundImage of the body to that slide
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    // For each slide remove the classList of 'active
    slides.forEach((slide) => slide.classList.remove('active'))
    // Add the classList of 'active'
    slides[activeSlide].classList.add('active')
}

/* 
Modified Code from ChatGPT

const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let currentSlideIndex = 0;

rightButton.addEventListener('click', () => {
    currentSlideIndex++;

    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }

    setBackgroundImage();
    setActiveSlide();
});

leftButton.addEventListener('click', () => {
    currentSlideIndex--;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    setBackgroundImage();
    setActiveSlide();
});

function setBackgroundImage() {
    body.style.backgroundImage = slides[currentSlideIndex].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentSlideIndex].classList.add('active');
}

*/
