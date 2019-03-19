// first make a few gif array items
var giphs = ['fixie', 'red bull rampage', 'bike packing', 'history'];


function displayGiphs() {

  var giph = $(this).attr('data');
  var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=HQgOLyan73JAYNbbtRUSTappfYi1DEp2&q=' + giph + '&limit=10&offset=0&rating=G&lang=en';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {
    // log response
    console.log(response.data);
    var result = response.data;
    // I set the query limit to 10.
    for (var i = 0; i < result.length; i++) {
      var imgURL = result[i].images.fixed_height_still.url;
      var rating = result[i].rating;
      var gifDiv=$('<div class="giphDiv col-md-4 mx-auto">');
      var rate = $('<p id="banner">').text('Rating: ' + rating);
      var image = $('<img id="liveGif">').attr('src', imgURL);
      image.addClass('btn');
      console.log(imgURL);
      console.log(rating);
      (gifDiv).prepend(rate);
      (gifDiv).prepend(image);
      $('.giphy').prepend(gifDiv);
    }

    $('.giphDiv').on('click', function() {
      if (imgURL===result.fixed_height_still.url) {
        imgURL=result.fixed_height.url;
      }
    });

    $('#buttons-view').prepend('.giphy');
  });
}


// Function for displaying movie data
function renderButtons() {
  $('.buttons').empty();

  for (var i = 0; i < giphs.length; i++) {
    var a = $('<button id="gifBtn">');
    a.addClass('gif-btn');
    a.addClass('btn btn-primary');
    a.attr('data', giphs[i]);
    a.text(giphs[i]);
    $('.buttons').append(a);
  }
}

$('#add-giph').on('click', function (event) {
  event.preventDefault();
  var giph = $('#giph-input').val().trim();
  giphs.push(giph);
  renderButtons();
});



$(document).on('click', '.gif-btn', displayGiphs);
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