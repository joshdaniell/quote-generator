var quote="";
var source="";

//Get the quote from the random generator
function getQuote(){
  $.ajax({
    headers: {
      // sets the API key in the request
      "X-Mashape-Key": "xhTRCrF5f0msh3zCVhZhAsyUg6pvp1kxsrWjsn3LPZhE3jtXqR",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },

    // specifies the URL for the API
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      success: function (response) {
      // turns the response from the server from a .JSON file into a javascript object
      var quoteObject = JSON.parse(response)
      // calls the function that displays the quote on the page, and passes the quote object as an argument
      setQuoteText(quoteObject)
    }
  })
}

//function to display quote text on the page
function setQuoteText(quoteObject) {
      //use jquery to select and set the html of the quote and author fields
      $(".quote").html(quoteObject.quote)
      $(".author").html(quoteObject.author)
  }

//binds the "event listener" for the newQuote button
$(".newQuote").on("click", getQuote)
