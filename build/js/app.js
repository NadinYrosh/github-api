(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2481cfbb1a229cc7c4c86af0ce27de4fb575aaa9";

},{}],2:[function(require,module,exports){
exports.clearPage = function() {
  $('.showGH').text("");
};//clear

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $('#button').click(function(e) {
    e.preventDefault();
    var userName = $('#userName').val();
    var requri   = 'https://api.github.com/users/'+userName;
    var repouri  = 'https://api.github.com/users/'+userName+'/repos';
    $('#userName').val("");
      $.getJSON(requri + '?access_token=' + apiKey + '').then(function(response){
        $('.showGH').append("<img src=" + response.avatar_url + "/>");
        $('.showGH').append("<p>" +"UserName: " + userName+ "</p>");
        $('.showGH').append("<p>" +"FullName: " + response.name + "</p>");
        $('.showGH').append("<p>" +"Location: " + response.location+ "</p>");
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
        console.log("ERRRRRRR");
      });
    $.getJSON(repouri + '?access_token=' + apiKey + '&per_page=30').then(function(repo){
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
    }); //repo error
  }); //click function
}; //get repos function

},{"./../.env":1}],4:[function(require,module,exports){
var getRepos = require('./../js/getRepos.js').getRepos;
var clearPage = require('./../js/clearPage.js').clearPage;

$(document).ready(function(){
  $("#button").click(function() {
    getRepos($("#userName").val());
  });
  $(".clear").click(function() {
    clearPage();
  });
});//doc ready

},{"./../js/clearPage.js":2,"./../js/getRepos.js":3}]},{},[4]);
