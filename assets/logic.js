
console.log('cunt');
/*
Logic for index giphy
steven midgley
*/

var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=HQgOLyan73JAYNbbtRUSTappfYi1DEp2&q=fixie&limit=25&offset=0&rating=G&lang=en';

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  // After the data from the AJAX request comes back
  // Saving the image_original_url property
  gifImage=response.data.image_orifginal_url;
  // Creating and storing an image tag
  gifToHtml=$(`<img>`);
  // Setting the gifToHtml src attribute to imageUrl
  
});






// Prepending the catImage to the images div








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
