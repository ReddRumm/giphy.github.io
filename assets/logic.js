$("#find-giphy").on("click", function() {
    let giphy=$(this).attr("data-gif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?" +
        giphy+"api_key=To5ijLa1899Ime63nx4SwuXKYLoIb3Zm";
    
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
      });
    
    });