const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f30b0672ba157c6ae514e8210a9a240&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7f30b0672ba157c6ae514e8210a9a240&query="'


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// Get initial movies
getMovies(API_URL)

// GET MOVIES FUNCTION
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)

    console.log(data.results);
}

function showMovies(movieList) {
    main.innerHTML = ''

    movieList.forEach((movie) => {
        // using destructuring
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
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