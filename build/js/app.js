(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "01faa787b1664971f9d6e5fe64aec7ba8e143a4b";

},{}],2:[function(require,module,exports){
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

// $(document).ready(function() {
//   var name = $('#name').val();
//   $('#name').val("");
// });

},{"./../.env":1}]},{},[2]);
