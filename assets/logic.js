// first make a few gif array items
var giphs = ["fixie", "red bull rampage", "bike packing", "history"];


function displayGiphs() {

  var giph = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HQgOLyan73JAYNbbtRUSTappfYi1DEp2&q" + giph + "=&limit=25&offset=0&rating=G&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // log response
    console.log(response);

    // Retrieving the URL for the image
    var imgURL = response.data[0];
    console.log(imgURL);
    // Creating an element to have the rating displayed
    var rating = response.Rated;
    var rate = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    giphDiv.append(rate);
    
    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);
    // make div var
    var giphDiv = $("<div class='gif'>");

    // Appending the image
    giphDiv.append(image);

    // Putting the entire movie above the previous movies
    $("#buttons-view").prepend(movieDiv);

  });


}

// Function for displaying movie data
function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a movie button is clicked
$("#add-giph").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();







// =========================
// save the responce in a var

// make an array and store in a var

// push response to array

// loop through arrray
// Add button attr to the array items
// ========================================

// make an on click function thats 
// stores user input
// pulls responce for ajax
// populated results into thre array
// which then is populated onto the DOM


// populate buttons on the DOM

// also populate gifs on the DOM when the button is pupolated