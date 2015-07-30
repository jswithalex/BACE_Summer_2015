/*
  Weather API Demo using jQuery's getJSON method.

  ** General Overview **
  + Get Location Data from your ip address via ip-api.com/json
  + Insert state, city and country into the location html elements
  + Get weather data using location data returned from ap-api
  + insert that into the weather html elements

  Documentation Links to consult when writing your code:
  
  ip-api --> http://ip-api.com/docs/
  openweathermap --> http://openweathermap.org/api
*/

// API_KEY for openweathermap.org
var API_KEY = '61beaf11b206ba345f116d0ebe6205c2';
var ip_api_url = 'http://ip-api.com/json';
var weathermap_url_base = '';
// We Get IP location data from ip-api.com using jquery's getJSON method
// This method is an AJAX request that converts the JSON response data for you

$.getJSON(ip_api_url).then( function(locData) {

  // the first function that's called is $.getJSON.

  // The 'then' function that is called after that ensures that the 
  // data is received by us before the next code is run

  // TO DO: INSERT CITY STATE AND REGION DATA INTO HTML NODES AT THIS POINT
  
  // TO DO: THEN BUILD THE WEATHERMAP URL AND QUERY STRINGS SO WE CAN GET DATA FROM THERE
  
  var weatherMapGETurl = null; // 
  
  // we call the getJSON method again with the url we just built
  // we also return the data passed back to the next function (in the 'then' function)
  return $.getJSON(weatherMapGETurl);
}).then(function(weatherData) {
  // at this point, both api's should have returned their data. This is what 'then' ensures for us.

  // TO DO: TAKE DATA RETURNED FROM openweatherdata AND INSERT INTO HTML

});
