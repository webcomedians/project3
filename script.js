
$.noConflict();

(function($){
$(document).ready(
function getJSON(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSON('https://www.mysportsfeeds.com/api/feed/sample/pull/nba/2015-2016-regular/full_game_schedule.json?', function(data){
    console.log(data);
}); 

})(jQuery); 

//The comments below are overstack code for working with objects in the

//jSON file 
// $.getJSON('people.json', function(data) {
     //  $.each(data.person, function(i, f) {
       //   var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
         //  "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + //
//"<td>" + f.roll + "</td>" + "</tr>"
  //         $(tblRow).appendTo("#userdata tbody");
    // }); >
