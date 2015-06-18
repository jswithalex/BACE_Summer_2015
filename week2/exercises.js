// ::::: Review ::::::

/*

Q1: Which does not result in a string?

1) ''
2) 'abc'
4) 5 * '4'
3) 5 + '6'
 
Q2: Which block will execute, the 'if' or the 'else'?

var num = 0;

if (num) {
  console.log(num);
}
else {
  console.log('no' + num + '.');
}

Q2: Which block will execute, the 'if' or the 'else'?

var num = '0';

if (num) {
  console.log(num);
}
else {
  console.log('no' + num + '.');
}


*/


// ::::ARRAYS::::::

// :: ARRAY BASICS ::
// an array is a container for any type of value
// the benefit of an array is that the values are in reliable order
// arrays store values at what we call an 'index'
// we use that index to get the value using this syntax: array[N]
// where N is >= 0  

// this is an empty array
var numbers = [];

// EXERCISE: using array.length
// use the array.length property on the numbers array above to get its length.
// Could numbers.length be used as the test for an IF CLAUSE? Why or why not?

// :: ADDING VALUES TO AN ARRAY :: 

// we can ADD values to it like this:
numbers.push(5); 
// 'push' adds a single value to the END of the array
// so the array is now [5]
numbers.push(6);
// array is now [5,6]

// :: ACCESSING VALUES IN AN ARRAY :: 

// if we want to access a particular item from the array ...
// we use an integer that is greater than or equal to 0
var first_value = numbers[0];

// EXERCISE: Why 0 and not 1?
// We access the first value of an array with the index 0. 
// Can you imagine why we use 0 instead of 1?

// EXERCISE: Express index of last element in terms of array's length 
// Because we start at 0 and not 1 when indexing arrays, the length will not
// tell us the index of the last array element.  However, it will get us close.
// Think about the relationship between an array's length and the index of it's 
// last element.  Then write a line of code to print the value of the last 
// element using the array.length property.


// if we try to access an array index where there is no value
var a_value = numbers[5];

// EXERCISE: accessing array values

// What happens when you try to save the value of numbers[5] as 'a_value' ?
// What type of value is 'a_value'?


// :: REMOVING VALUES FROM AN ARRAY :: 

// to take off the last value in an array, use 'pop' 

var last_value = numbers.pop();

// EXERCISE:  array.push() versus array.pop() 

// Both array.push() and array.pop() will give you back a value. 
// What is the difference between the value given back by array.push() versus
// the value given back by array.pop() ?

// EXERCISE: Arrays vs Strings
// Arrays and Strings have some similarities.  For example, you can get a string
// character with the same syntax as you use in an array.
var alpha_partial = 'abcdefghijklmnop';
// write the code to print out 'd', 'k' and 'p' from alpha_partial using the 
// array access syntax


// CONTROL - FLOW PART 1: The 'WHILE' Loop

// WHAT: A loop in programming is a repetition of one or more statements.  
// WHY: Loops are indispensible tools for efficiently manipulating a large 
// collection of values.
// HOW: While loops will repeatedly run the same section of code until 
// a terminating condition is met. This condition is goes 'while (HERE)'. 
 
// This function counts down from 10 to 0 
var max = 10;
while (max >= 0) {
  console.log(max);
  max--;
}

// EXERCISE: Change the while loop so that the code prints 10,9,8,7,6,5 

// EXERCISE: If I left out the max-- line, what will the console log on the
// first loop? 

// EXERCISE: Can you think of a similarity between the if statement we talked 
// about last class and the while loop presented above?

// EXERCISE: Replace CONDITION and LINE(S) OF CODE below with the proper code 
// to move all the names from names1 to names2.

/*
var names1 = ['Bob','Alice','Zi','Malcom','Claude'];
var names2 = [];
while (CONDITION) {
  LINE(S) OF CODE;
}
debug(names2);
*/

//   :: Functions ::

// "the idea of writing a program is to make something less work" - Axel Rauschmeyer, Eloquent JavaScript, Ch 2
// Functions are self-contained and (should be ) reusable sections of code within your program.
// They can receive input values and give output values back, but they 
// don't require input or output values.
// Input values are called arguments
// The Output value is called a 'return value'

// Writing our own functions requires two steps: 

// 1) defining the function
// 2) using the function (also called 'calling' or 'invoking' it)

// DEFINING A FUNCTION

function double_a_number(num) {
  return num*2;
}

// CALLING A FUNCTION 

var doubled_number = double_a_number(10);


// EXERCISE: Why do you think calling double_a_number with the string '10'
// instead of the integer 10 works?

// EXERCISE: Why doesn't calling double_a_number(10) print a value? 

// EXERCISE: Celcius to Fahrenheit Function
// Write a function that takes in any celcius degree and outputs the correct 
// Fahrenheit value.
