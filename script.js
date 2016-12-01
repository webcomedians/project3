$.noConflict();
(function($){
$(document).ready(
function getJSON(url, success) {
	var SportsAPI = 'https://www.mysportsfeeds.com/api/feed/sample/pull/nba/2015-2016-regular/playoff_team_standings.json?';
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
      'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017%20Regular/division_team_standings.json?teamstats=' + query,
      function(data) {


      });  
  
      });

});
});
});
});
});
})(jQuery); 


/*
// I KID YOU NOT THE SCRIPT TAG WAS WRONG AND DIDNT LOAD IN JQUERY 
//I HAVE THE STALEST FACE 11/29/2016
	

//Too much recursion error now being displayed will revisit later but it runs
/*Old code: function getJSON(url, success) {

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

$(document).ready(function(){
getJSON('https://www.mysportsfeeds.com/api/feed/sample/pull/nba/2015-2016-regular/full_game_schedule.json?'), function(data){
    JSON.parse(data);
	$.each(data.fullgameschedule.gameentry, function(gameNum,obj){
		console.log(obj.date + " " + obj.awayTeam);
	})
});  
});*/



