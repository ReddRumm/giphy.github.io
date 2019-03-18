/*
Logic for index giphy
steven midgley
*/
var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=HQgOLyan73JAYNbbtRUSTappfYi1DEp2&q=&limit=25&offset=0&rating=G&lang=en';

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  var gifImage = response.gif;
  $('div').img(gifImage);
});

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
