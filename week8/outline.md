## Week 8 Outline (This is our Final Class)

1. Best Practices
  + var declarations
  + cache the dom elements

2. Objects
  + an object exercise that develops 'unpacking' skills
  
3. Ajax

Ajax stands for Asynchronous Javascript and XML, but these days we use JSON more often than XML.

Our class exercise will focus on using data from two distinct sources in order to populate an HTML page with content that tells us our location and the weather.

In each case, we use the jQuery method $.getJSON(). Documentation here: http://api.jquery.com/jquery.getjson/

$.getJSON is shorthand for this:

````
$.ajax(
{
  dataType: 'json',
  url: 'http://openweathermap.com/api/v2/id=boston',
  success: successHandlerFunction,
  data: data,
});

$.getJSON(url, {
  {
    // this is a data object whose key/ value pairs are sent to the server as a query string
    // aka www.url.com/api/v2/key=value&key=value ....
  }
});
````

4. Implement a jQuery page fade in effect to mitigate some of the lag from our asynchronous request.
