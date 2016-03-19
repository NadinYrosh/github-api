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
