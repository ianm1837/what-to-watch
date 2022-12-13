var moviePoster = document.getElementById('movie-poster')
var movieTitle = document.getElementById('movie-title')
var movieDescription = document.getElementById('movie-description')
var movieRating = document.getElementById('movie-rating')
var movieLink = document.getElementById('movie-link')

var storedPoster = localStorage.getItem('poster-url')
var storedTitle = localStorage.getItem('movie-title')
var storedDescription = localStorage.getItem('movie-overview')
var storedRating = localStorage.getItem('rating')
var storedLink = localStorage.getItem('imdb-id')

// storedRating.toString()

moviePoster.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${storedPoster}">`
movieTitle.innerHTML = `<h3 class="is-size-2">${storedTitle}</h3>`
movieDescription.innerHTML = `<p>${storedDescription}</p>`
movieRating.innerHTML = `${storedRating}`
movieLink.innerHTML = `<a href="https://www.imdb.com/title/${storedLink}">View on IMDB</a>`