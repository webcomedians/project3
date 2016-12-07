$.noConflict();
(function($){
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
  $('division1').empty();
  $('division2').empty();
  $('division3').empty();
  $('division4').empty();
  $('division5').empty();
  $('division6').empty();
  $('EasternAtlantic').empty();
  $('EasternCentral').empty();
  $('EasternSoutheast').empty();
  $('WesternNorthwest').empty();
  $('WesternPacific').empty();
  $('WesternSouthwest').empty();
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