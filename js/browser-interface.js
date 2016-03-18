var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#button').click(function() {
    var userName = $('#userName').val();
    console.log(userName);
    $('#userName').val("");
      $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey + '').then(function(response){
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
      console.log(JSON.stringify(response));
      $('.showGH').text(userName + ":");
  });
});
