var jquery = require('jquery');

var input = jquery('#url');
input.val('paste your URL here');

var form = jquery('[id=search]');
form.on('submit', function() {
  downloadFromInternet(input.val())
  return false
})

var request = require ('request')
function downloadFromInternet(url) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  })
}
