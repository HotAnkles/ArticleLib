var jquery = require('jquery');
var fs = require('fs');

var input = jquery('#url');
input.val('paste your URL here');

var request = require ('request')
function downloadFromInternet(url) {
  function afterrequest (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFile ('Library', body, function (){
        readFromDisk ('Library')
      })
      console.log(body) // Show the HTML for the Google homepage.
    } else {
      alert('request failed')
    }
  }
  request(url, afterrequest)
}
function readFromDisk (filename){
  function afterreadfile (error, contents){
    var body = jquery('body');
    body.append (contents)
  }
  fs.readFile (filename, 'utf8', afterreadfile)

}

var form = jquery('[id=search]');
form.on('submit', function() {
  downloadFromInternet(input.val())
  return false
})
