//get all elements
var oneStar = document.getElementById('one-star')
var twoStar = document.getElementById('two-star')
var threeStar = document.getElementById('three-star')
var fourStar = document.getElementById('four-star')
var fiveStar = document.getElementById('five-star')

var genreAction = document.getElementById('action')
var genreScifi = document.getElementById('scifi')
var genreComedy = document.getElementById('comedy')
var genreHorror = document.getElementById('horror')
var genreDrama = document.getElementById('drama')

var top100yes = document.getElementById('top-100-yes')
var top100no = document.getElementById('top-100-no')

var submitButton = document.getElementById('submit-button')


// IMDB top 100 movies API
// var options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bc7d31fce9msh09dbbf7997ceeddp1a2431jsnf7770e2ff3d3',
// 		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb-top-100-movies.p.rapidapi.com/premiummovies', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     console.log()



//function to get movies based on parameter, load showcase page, update dom
const getTheMovieDatabaseApi = ()=> {


	//get genre and rating element values
	//set variables for api call
	var selectedGenre
	var selectedMinRating
	var selectedMaxRating

	if (genreAction.checked){
		selectedGenre = "Action"
	}
	if (genreScifi.checked){
		selectedGenre = "Science%20Fiction"
	}
	if (genreComedy.checked){
		selectedGenre = "Comedy"
	}
	if (genreHorror.checked){
		selectedGenre = "Horror"
	}
	if (genreDrama.checked){
		selectedGenre = "Drama"
	}

	if (oneStar.checked){
		selectedMinRating = 0
		selectedMaxRating = 2
	}
	if (twoStar.checked){
		selectedMinRating = 2.1
		selectedMaxRating = 4
	}
	if (threeStar.checked){
		selectedMinRating = 4.1
		selectedMaxRating = 6
	}
	if (fourStar.checked){
		selectedMinRating = 6.1
		selectedMaxRating = 8
	}
	if (fiveStar.checked){
		selectedMinRating = 8.1
		selectedMaxRating = 10
	}

	//make api call
	var genreRequestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bba539373daca70a2ff171bc45a71196&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectedGenre}&vote_average.gte=${selectedMinRating}&vote_average.lte=${selectedMaxRating}`, genreRequestOptions)
		.then(response => response.json())
		.then(result => {
			//get page total pages from search results
			let howManyPages = result.total_pages

			//api doesn't like any higher than page 500 being called
			if (howManyPages > 500){
				howManyPages = 500
			}
			
			let randomPageNum = Math.floor(Math.random() * howManyPages) + 1
			let randomPage = randomPageNum.toString()

			return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bba539373daca70a2ff171bc45a71196&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&with_genres=${selectedGenre}&vote_average.gte=${selectedMinRating}&vote_average.lte=${selectedMaxRating}`, genreRequestOptions)
		})
		.then(result => result.json())
		.then(result => {

			//inside .then after API call load showcase
			//for now just console.log everything

			//take returned data and pick random movie on page
			let howManyOnPage = result.results.length
			let randomMovie = Math.floor(Math.random() * howManyOnPage)
			let movieID = result.results[randomMovie].id

			return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=bba539373daca70a2ff171bc45a71196&language=en-US`, genreRequestOptions)

		})
		.then(result => result.json())
		.then(result => {
			//update showcase elements with returned API data
			console.log(result)
			console.log("Movie Title: " + result.original_title)
			console.log("Movie Overview: " + result.overview)
			console.log("Rating: " + result.vote_average)
			console.log("Release Date: " + result.release_date)

			//poster url: https://image.tmdb.org/t/p/original + posterPath
			console.log("Poster URL: " + result.poster_path)

			//IMDB page url: https://www.imdb.com/title/ + id		
			console.log("imdb id: " + result.imdb_id)



		})
		.catch(error => console.log('error', error));

}

//on button click - function to determine what api to use
const whichApi = () => {

if (top100yes.checked){
	//invoke function with Top-100 API here
}
if (top100no.checked){
	getTheMovieDatabaseApi()
}

}

//even listener for button to call getTheMovieDatabaseApi
submitButton.addEventListener('click', whichApi)