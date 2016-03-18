(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "01faa787b1664971f9d6e5fe64aec7ba8e143a4b";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
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
  });
});

// var getAllRepos = require('./../js/browser-interface.js').getAllRepos;
//
// $(document).ready(function(){
//   $("#button").click(function(e) {
//     e.preventDefault();
//     getAllRepos($("#userName").val());
//   });
// });


//I need to split up my ui logic to have functions/methods in multile files so that it is more readible ? spelling
// break time

},{"./../.env":1}]},{},[2]);
