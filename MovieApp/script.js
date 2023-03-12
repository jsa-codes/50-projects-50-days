
/* 
- BREAKDOWN OF THE API URL
- API is the subdomain of the domain themoviedb.org
- /3 is the version of the API
- discover/movie?sort_by=popularity (the query string)
- Next we have our API key
- And last is the '&page=1' which gives us the first page of results of the most popular movies
*/
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f30b0672ba157c6ae514e8210a9a240&page=1'

/* 
- Setting the size of the image 
- We don't need the slash after the width 
*/
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

/* 
- For search functionality 
- We also want to leave the single double quote at the end so that we can concatenate a search term from the search bar into the string below.
*/
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7f30b0672ba157c6ae514e8210a9a240&query="'




const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')




// Get initial movies
getMovies(API_URL)

// GET MOVIES FUNCTION
async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    showMovies(data.results)

    console.log(data.results);
}

// Function to create a list of movies that match the search criteria
function showMovies(movieList) {
    main.innerHTML = ''

    movieList.forEach((movie) => {
        // using destructuring to get values out of the movie object
        const { title, poster_path, vote_average, overview } = movie

        // Create a div element in the document
        const movieEl = document.createElement('div')
        // Add a class of 'movie to the div
        movieEl.classList.add('movie')
        // Set the innerHTML of that div with a class of 'movie'
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRating(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the value from the input field
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        searchTerm.value = ''
    } else {
        window.location.reload()
    }
})