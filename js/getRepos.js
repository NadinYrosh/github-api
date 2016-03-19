var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
    var userName = $('#userName').val();
    var requri   = 'https://api.github.com/users/'+userName;
    var repouri  = 'https://api.github.com/users/'+userName+'/repos';
    $('#userName').val("");
      $.getJSON(requri + '?access_token=' + apiKey + '').then(function(response){
        $('.showGH').append("<img src=" + response.avatar_url + "/>");
        $('.showGH').append("<p>" +"UserName: " + userName+ "</p>");
        $('.showGH').append("<p>" +"FullName: " + response.name + "</p>");
        $('.showGH').append("<p>" +"Location: " + response.location+ "</p>");
        // console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
        console.log("error from requir");
      });
    $.getJSON(repouri + '?access_token=' + apiKey + '&per_page=30').then(function(repo){
      console.log(repo);
      for (var i = 0; i <= repo.length; i++) {
        // console.log(repo[i].description);
        if (repo[i].name === "") {
          $('.showGH').append(" <Br>Repository: EMPTY");
        }else{
          $('.showGH').append("<Br>Repository: " +
          "<a href=" + "https://github.com/'+userName" + "/" + "repo[i].name" + ">" + repo[i].name + "</a>");
        }
        if (repo[i].description === "") {
          $('.showGH').append(" <Br>Description: No description provided.");
        }else{
          $('.showGH').append(" <Br>Description: " + repo[i].description);
        }
        if (repo[i].language !== "") {
          $('.showGH').append(" <Br>Languange: " + repo[i].language + "<hr>");
        }else{
          $('.showGH').append(" <Br>Languange: NONE <hr>");
        }
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    }); //repo error
}; //get repos function
