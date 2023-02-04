const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

// Call a function called generateJoke()
generateJoke()


// JOKE GENERATION FUNCTION USING .THEN

// function generateJoke() { 
//     // make fetch request
//     fetch(`https://icanhazdadjoke.com`, {
//         headers: { 
//             'Accept': 'application/json',
//     }})
//     .then((response) => response.json())
//     .then((data) => {
//         jokeElement.innerHTML = data.joke
//     })
// }



// JOKE GENERATION FUNCTION USING ASYNC / AWAIT

async function generateJoke() {
    // make fetch request
    const response = await fetch(`https://icanhazdadjoke.com`, {
        headers: {
            'Accept': 'application/json',
        }
    })
    const data = await response.json()
    jokeElement.innerHTML = data.joke
}
