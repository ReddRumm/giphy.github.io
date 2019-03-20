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
    console.log(response);
    var result = response.data;
    // I set the query limit to 10.
    for (var i = 0; i < result.length; i++) {
      var imgURL = result[i].images.fixed_height.url;
      var rating = result[i].rating;
      var gifDiv = $('<div class="giphDiv col-md-4 mx-auto">');
      var rate = $('<p id="banner">').text('Rating: ' + rating);
      var image = $('<img id="liveGif">').attr('src', imgURL);
      var gifButton = $('<button>').append(image);

      console.log(imgURL);
      console.log(rating);

      (gifDiv).prepend(rate);
      (gifDiv).prepend(gifButton);
      $('.giphy').prepend(gifDiv);
    }
    $('#buttons-view').prepend('.giphy');
  });
}

$('#liveGif').on('click', function (event) {
  event.preventDefault();
  console.log('clicked');
  if (result[i].fixed_height_still.url) {
    imgURL = result[i].fixed_height.url;
    var image = $('<img id="liveGif">').attr('src', imgURL);
    (gifDiv).prepend(image);
    $('.giphy').prepend(gifDiv);
  }
});

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
