var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#button').click(function(e) {
    e.preventDefault();
    var userName = $('#userName').val();
    var requri   = 'https://api.github.com/users/'+userName;
    var repouri  = 'https://api.github.com/users/'+userName+'/repos';
    $('#userName').val("");
      $.getJSON(requri + userName + '?access_token=' + apiKey + '').then(function(response){
        $('.showGH').append("Picture" + "<img src=" + response.avatar_url + "/>");
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    $.getJSON(repouri + '?access_token=' + apiKey + '').then(function(repo){
      console.log(repo);
      for (var i = 0; i <= repo.length; i++) {
        $('.showGH').append(" <Br>Repository: " + repo[i].name);
        $('.showGH').append(" <Br>Description: " + repo[i].description);
        $('.showGH').append(" <Br>Languange: " + repo[i].language + "<hr>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
      $('.showGH').append("UserName: " + userName);
      $('.showGH').append("<br>" + "<p>" +"FullName: " + "fullName" + "</p>");
  });
});
