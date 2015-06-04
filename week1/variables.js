/* Variables, Datatypes, Expressions, Statements, Functions */

/*
  
*/

/*

  VARIABLES
  
  What is a variable?  
  Simply put, it's a name that points to the place in memory where a value is stored.  
  You pick a useful name to store some value and the program retains that name.  
  When you want to use that value, you use the variable name you gave it. 
  Note: a variable does not have quotes around it (that's a string). 
  
  to declare a variable, you need:
  
  the 'var' keyword
  the variable name
  a single '=' sign
  a value
  a semicolon (tells the javascript interpreter that the statement is over)
*/

var firstName = 'Bill';
var lastName = 'Gates';
var fullName = firstName + ',' + lastName;
var age = 23;
var ofVotingAge = true;

console.log(fullName);
/* 
  prints: Bill,Gates
  By the way: console.log is a function. It takes in any number of values and prints them to the browser console.
*/

/* 

EXPRESSIONS 

An expression could look like this:

1 + 2

or this:

'Bill' + ' ' + 'Gates'

or this:

42

or this:

(42 + 'a').length

Expressions consist of one or more elements that are reduced to a single value.


*/

