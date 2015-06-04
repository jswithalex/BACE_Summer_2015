/* Variables, Datatypes, Expressions, Statements, Functions */

/*
  
*/

/*

  VARIABLES
  
  What is a variable? 
  A number, a string (anything in quotes) or a true or false value.
  A variable's name lets you keep tabs on a place in your computer where a specific value is stored, 
  and you can change that value if you want by accessing the variable and .
  You pick a useful name to store some value and the program retains that value for you under tha name you gave it while the program runs.  
  When you want to use that value, you use the variable name you gave it. 
  Note: a variable's name does not have quotes around it (that's a string). 
  
  to declare a variable, you need:
  
  the 'var' keyword
  the variable name
  a single '=' sign
  a value
  a semicolon (tells the javascript interpreter that the statement is over)
*/

var firstName = 'Bill';
var lastName = 'Gates';
var fullName = firstName + ', ' + lastName;
var age = 23;
var ofVotingAge = true;

console.log(fullName);
/* 
  prints: Bill, Gates
  By the way: console.log is a function. It takes in any number of values and prints them to the browser console.
*/

/* 

EXPRESSIONS 

An expression could look like this:

1 + 2

or this:

'Bill' + ',' + ' ' + 'Gates'

or this:

42

or this:

(42 + 'a').length

Expressions consist of one or more elements that are reduced to a single value. 
*/

/* 

STATEMENTS:

Expressions alone won't change the state of your program, they are just computations that the computer does for you.

example: 
2 + 4 

This yields 6, but this value is thrown away.

Statements DO change the state of your program.  They let you save the results of your expression or print data to the console. do things like add another name / value pair to the list of names and values that are in your program.

example: 
var result = 2 + 4 yields 6, but it also stores this value under the variable named 'result'.


*/
