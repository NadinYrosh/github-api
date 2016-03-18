var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#button').click(function(e) {
    e.preventDefault();
    var userName = $('#userName').val();
    var requri   = 'https://api.github.com/users/'+userName;
    var repouri  = 'https://api.github.com/users/'+userName+'/repos';
    $('#userName').val("");
      $.getJSON(requri + '?access_token=' + apiKey + '').then(function(repo){
        $('.showGH').append("<img src=" + repo.avatar_url + "/>");
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
        console.log("ERRRRRRR");
      });
    $.getJSON(repouri + '?access_token=' + apiKey + '').then(function(repo){
      // console.log(repo);
      for (var i = 0; i <= repo.length; i++) {
        if (repo[i].name !== null || repo[i].name !== "") {
          $('.showGH').append(" <Br>Repository: " + repo[i].name);
        }else{
          $('.showGH').append(" <Br>Repository: EMPTY");
        }
        if (repo[i].description !== null ||repo[i].description !== "") {
          $('.showGH').append(" <Br>Description: " + repo[i].description);
        }else{
          $('.showGH').append(" <Br>Description: EMPTY");
        }
        if (repo[i].description !== null) {
          $('.showGH').append(" <Br>Languange: " + repo[i].language + "<hr>");
        }else{
          $('.showGH').append(" <Br>Languange: NONE <hr>");
        }
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
      $('.showGH').append("UserName: " + userName);
      $('.showGH').append("<br>" + "<p>" +"FullName: " + "fullName" + "</p>");
  });
});

// $(document).ready(function() {
//   var name = $('#name').val();
//   $('#name').val("");
// });
