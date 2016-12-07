$.noConflict();
(function($){
<<<<<<< HEAD
  $(document).ready(
    function() {
      var team;
      var city;
      $.ajax({
        headers: {
        'Authorization': 'Basic ' + btoa('Connotate:phoenix8')
        },
        url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json"
      }).done(
        function(data) {
          addCon(data,0,'Eastern');
          addCon(data,1,'Western');
         }
      ).fail(
        function(e) {
          alert('Failure!');
        }
      ); 

      addCon = function (data,conID,conName) {
        for(var i = 0; i < 15; i++){
          team=data.playoffteamstandings.conference[conID].teamentry[i].team.Name;
          city=data.playoffteamstandings.conference[conID].teamentry[i].team.City;
          if(conName==='Eastern'){
              $('#Eastern').append(
              '<li>'+
              '  <p>'+city+' '+team+'</p>'+    
              '</li>'
            );
          }
          if(conName==='Western'){
              $('#Western').append(
              '<li>'+
              '  <p>'+city+' '+team+'</p>'+    
              '</li>'
            );
          }
        }
      }
$('#division-form').on('submit', function(event) {
      $.ajax({
        headers: {
        'Authorization': 'Basic ' + btoa('Connotate:phoenix8')
        },
        url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017%20Regular/division_team_standings.json?teamstats="
      }).done(
        function(data) {
          addHeaders();
          addDiv(data, 0, 'EasternAtlantic');
          addDiv(data, 1, 'EasternCentral');
          addDiv(data, 2, 'EasternSoutheast');
          addDiv(data, 3, 'WesternNorthwest');
          addDiv(data, 4, 'WesternPacific');
          addDiv(data, 5, 'WesternSouthwest');          
         }
      ).fail(
        function(e) {
          alert('Failure!');
        }
      ); 
        addDiv = function (data, divID, divName) {
        for(var i = 0; i < 5; i++){
          team = data.divisionteamstandings.division[divID].teamentry[i].team.Name;
          city = data.divisionteamstandings.division[divID].teamentry[i].team.City;
        if(divName === "EasternAtlantic"){
              $('#EasternAtlantic').append(
              '<li>'+
              '  <p>'+city+ ' '+team+'</p>'+    
              '</li>'
            );          
        }
        if(divName === "EasternCentral"){
              $('#EasternCentral').append(
              '<li>'+
              '  <p>'+city+ ' '+team+'</p>'+    
              '</li>'
            );          
        }
        if(divName === "EasternSoutheast"){
              $('#EasternSoutheast').append(
              '<li>'+
              '  <p>'+city+ ' '+team+'</p>'+    
              '</li>'
            );          
        }
        if(divName === "WesternNorthwest"){
              $('#WesternNorthwest').append(
              '<li>'+
              '  <p>'+city+ ' '+team+'</p>'+    
              '</li>'
            );          
        } 
        if(divName === "WesternPacific"){
              $('#WesternPacific').append(
              '<li>'+
              '  <p>'+city+ ' '+team+'</p>'+    
              '</li>'
            );          
        }   
        if(divName === "WesternSouthwest"){
              $('#WesternSouthwest').append(
              '<li>'+
              '  <p>'+city+ ' '+team+'</p>'+    
              '</li>'
            );          
        }           
        }
        }
        addHeaders = function (data){
          $('#division1').append(
          'Eastern/Atlantic' 
          );
          $('#division2').append(
          'Eastern/Central'
          );
          $('#division3').append(
          'Eastern/Southeast'
          );
          $('#division4').append(
          'Western/Northwest'
          );
          $('#division5').append(
          'Western/Pacific'
          );
          $('#division6').append(
          'Western/Southwest'
          );
      }
      });
    }
  )
})(jQuery);
=======
$(document).ready(
function getJSON(url, success) {
console.log("Start");
//I changed the index.html http-equiv to read our auth
//I also got an email back from serverside which is giving us the greenlight to get around their CORS
$.ajax({
    url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?",
    type: "GET",
    dataType: 'json',
    xhrFields: {
         withCredentials: true
    }
});

   
        console.log("Okay This chunk of code works");
$.ajax({
    url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?",
    type: "GET",
    dataType: 'json',
    xhrFields: {
         withCredentials: true
    }
});
	var SportsAPI = 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?';

console.log("calling the live API here");
 

  console.log("And now lets hit a point in the live API");
	$.getJSON(SportsAPI, function(json){
		console.log("The API call is going through here");

    var cityName, teamName;

   for(var i = 0; i < 15; i++){
    cityName = json.playoffteamstandings.conference[0].teamentry[i].team.City;
    teamName = json.playoffteamstandings.conference[0].teamentry[i].team.Name;
    $("#Eastern").append("<li>" + cityName + " " + teamName); 
   }
   for(var i = 0; i < 15; i++){
    cityName = json.playoffteamstandings.conference[1].teamentry[i].team.City;
    teamName = json.playoffteamstandings.conference[1].teamentry[i].team.Name;
    $("#Western").append("<li>" + cityName + " " + teamName); 
   }

console.log("Displays here again, Works");
});
}); 

})(jQuery); 
//Below this line we can implement later on heres a simple ajax request thatll work for project3 above
/* $.noConflict();
(function($){
$(document).ready(
function getJSON(url, success) {

console.log("Start");
//I changed the index.html http-equiv to read our auth
//I also got an email back from serverside which is giving us the greenlight to get around their CORS

var request = $('request'),
    username = "Connotate",
    password = "phoenix8",
    url = "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?",
    auth = "Basic Q29ubm90YXRlOnBob2VuaXg4" + new $(username + ":" + password).toString("base64");

$(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        $(document).ready(function() {

	var SportsAPI = "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?";
  $(document).ready(function() {

  console.log("once clicked");
	$.getJSON(SportsAPI, function(json){
		console.log("It worked");

    var cityName, teamName;

   for(var i = 0; i < 15; i++){
    cityName = json.playoffteamstandings.conference[0].teamentry[i].team.City;
    teamName = json.playoffteamstandings.conference[0].teamentry[i].team.Name;
    $("#Eastern").append("<li>" + cityName + " " + teamName); 
   }
   for(var i = 0; i < 15; i++){
    cityName = json.playoffteamstandings.conference[1].teamentry[i].team.City;
    teamName = json.playoffteamstandings.conference[1].teamentry[i].team.Name;
    $("#Western").append("<li>" + cityName + " " + teamName); 
   }
    
	$.each(json.playoffteamstandings.conference, function(gameNum, obj){
		$.each(obj.teamentry, function(i,obj) {
        
   
   $('#division-form').on('submit', function(event) {
     console.log("does this work");
    $.get(


      'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?' + query,

      'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?' + query,

      function(data) {
        response = ($("#team").val());
        for(var i = 0; i < 30; i++){
          console.log("test");
          if (json.playoffteamstandings.conference.teamentry[i].team.Name == response){ // need to adjust because considered undefined
            wins = json.playoffteamstandings.conference.teamentry[i].stats.Wins; // will adjust 
            losses = json.playoffteamstandings.conference.teamentry[i].stats.Losses; // will adjust
              $('#winloss').append( "<p>Wins: " + wins + "Losses: " + losses + "</p>"); 
          }
          else {
          $('#winloss').append("<p>Make sure you entered in the team name correctly.</p>");  
          }
        }
      });  
  
      });


});
      });
      });

});
});
});   
});
console.log("It worked");
})(jQuery); */



>>>>>>> a5aa08478fc3de9b1524cda268510f797fe23a58
