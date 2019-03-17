// $("button").on("click", function () {
//   var giphy = $(this).attr("data-gif");
//   var queryURL = "https://api.giphy.com/v1/gifs/search?" +
//     giphy + "api_key=To5ijLa1899Ime63nx4SwuXKYLoIb3Zmm&q=&limit=25&offset=0&rating=G&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var gifImage = response.gif;
    $('div').img(gifImage);
  });


// });