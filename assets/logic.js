$("button").on("click", function() {
    let giphy=$(this).attr("data-gif");
    let queryURL = "https://api.giphy.com/v1/gifs/search?" +
        giphy+"api_key=To5ijLa1899Ime63nx4SwuXKYLoIb3Zmm&q=&limit=25&offset=0&rating=G&lang=en";
    
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
      });
    
    });