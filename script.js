$.noConflict();
(function($){
$(document).ready(
function getJSON(url, success) {

$.ajax({
  headers: {
  'Authorization': 'Basic ' + btoa('Connotate:phoenix8')
},
    xhrFields: {
        withCredentials: true
    },
    
    url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017%20Regular/division_team_standings.json?teamstats="
    

/*    
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa('connotate:phoenix8'));
    },
    url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017%20Regular/division_team_standings.json?teamstats="

});

$.ajax({
    url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json?",
    type: "GET",
    dataType: 'json',
    xhrFields: {
         withCredentials: true
    }
    */
});


	var SportsAPI = 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/playoff_team_standings.json';
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
      'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017%20Regular/division_team_standings.json?teamstats=' );
  
      });
      });
});
});
});
});
})(jQuery); 