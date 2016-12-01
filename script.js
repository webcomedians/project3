$.noConflict();
(function($){
$(document).ready(
function getJSON(url, success) {
	var SportsAPI = 'https://www.mysportsfeeds.com/api/feed/sample/pull/nba/2015-2016-regular/playoff_team_standings.json?';

  $(document).ready(function() {
  console.log("once clicked");
	$.getJSON(SportsAPI, function(json){
		console.log("It worked");

    var cityName, teamName, wins, losses, response;

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
			console.log(json.playoffteamstandings.conference.teamentry);


   $('#winloss-form').on('submit', function(event) {
     console.log("does this work");
    var query = $('#team').val();
    $.get(
      'https://www.mysportsfeeds.com/api/feed/sample/pull/nba/2015-2016-regular/playoff_team_standings.json?' + query,
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



>>>>>>> 2fc6d705c051697dd2925ec4554096984511036d
