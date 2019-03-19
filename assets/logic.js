// first make a few gif array items
var giphs = ["fixie", "red bull rampage", "bike packing", "history"];


function displayGiphs() {

  var giph = $(this).attr("data");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HQgOLyan73JAYNbbtRUSTappfYi1DEp2&q=" + giph + "&limit=10&offset=0&rating=G&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // log response
    console.log(response.data);
    var result=response.data;
    // make loop to get the first 10 responses
  
      // Retrieving the URL for the image
      var imgURL = result.images.fixed_height.url;
      console.log(imgURL);
      
      // Creating an element to have the rating displayed
      var rating = result.rating;
      console.log(rating);
      var rate = $("<p>").text("Rating: " + rating);
      
      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);
      // Appending the image
      $('.giphy').append(image);
      
      // Displaying the rating
      $('.giphy').append(rate);
  
    // Putting the entire movie above the previous movies
    $("#buttons-view").append('.giphy');
  

  });


}

// Function for displaying movie data
function renderButtons() {
  $(".buttons").empty();

  for (var i = 0; i < giphs.length; i++) {
    var a = $("<button>");
    a.addClass("gif-btn");
    a.addClass('btn btn-primary');
    a.attr("data", giphs[i]);
    a.text(giphs[i]);
    $(".buttons").append(a);
  }
}
$("#add-giph").on("click", function (event) {
  event.preventDefault();
  var giph = $("#giphy-input").val().trim();
  giphs.push(giph);

  renderButtons();
});

renderButtons();
$(document).on("click", ".btn", displayGiphs);







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