$("#find-giphy").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=To5ijLa1899Ime63nx4SwuXKYLoIb3Zm&q=&limit=25&offset=0&rating=G&lang=en"
    
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
      });
    
    });