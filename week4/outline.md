## Concepts:

  + server and client relationship
  + event model and event listeners
  + HTML file organization

## The Story of an HTTP request

+ user clicks on a link
+ Web browser acts on user's behalf to request the resource from the server
+ server gets response, looks at the files it is responsible, and if it has that resource, sends it back
+ client's browser gets the response from the server
+ browser takes response, interprets the HTML, and renders the appropriate elements on the page
+ browser also constructs a model of the entire page, called the Document Object Model (DOM)
+ The DOM model is essentially a large nested structure with variable names that either have values corresponding to the page elements or that are undefined.
+ We use the builtin DOM variables to interact with the page (e.g. document.getElementById('#container') )

## The Document Object Model
The DOM is basically a layer in between the web browser and you that allows you to hook into the browser's events and handling.

## Event Model

+ An HTML page is a nested structure, meaning that elements can contain other elements.
    + e.g., A \<ul\> element by definition should contain \<li\> elements.
+ The DOM provides an event model that sends an event signal from the most specific to the least specific element on the page.
+ We can specify actions to be taken when specific actions occur in the browser.  For example, we can write a function `confirm click` that fires when the user clicks anywhere on the page.
+ In the case of nested elements like a \<li\> nested inside of a \<ul\>, the inner element 
