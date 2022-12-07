// IMDB top 100 movies API
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc7d31fce9msh09dbbf7997ceeddp1a2431jsnf7770e2ff3d3',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/premiummovies', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    console.log()



//on click - function to get movies based on parameter, load showcase page, update dom



	//get genre and rating element values


	//set variables for api call


	//make api call


	//inside .then after API call load showcase


		//take returned data and pick random movie on page


		//update showcase elements with returned API data




//get button element by id


//even listener for button to call getTheMovieDatabaseApi