/*
Logic for index giphy
steven midgley
*/
var queryURL='https://api.giphy.com/v1/gifs/search?api_key=HQgOLyan73JAYNbbtRUSTappfYi1DEp2&q='+ searchGify +'&limit=25&offset=0&rating=G&lang=en'
var searchGify ='equifax';

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var gifImage = response.gif;
    $('div').img(gifImage);
  });

