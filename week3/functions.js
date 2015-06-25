// Functions

// Functions are groups of statments

// Why Functions? 
// https://www.youtube.com/watch?v=ya4UHuXNygM
// 20:26


// Here are some built-in functions that we don't have to write


// split a string into an array
var s = "abc";
var s1 = s.split("");
var s2.split();

// filter out the odd numbers from a list
var nums = [1,4,5,7,2];
nums.filter(function(num) {
 return num % 2 === 1; // is odd;
});


// First We Define a Function

// here's a very basic function, it does nothing
function a() {}

// here's a function that takes an argument and logs it to the console

function b(phrase) {
  console.log(phrase);
}

// here's a function that takes another function as an argument and calls it
function c(b) {
  return b();
}

// here's a function that takes a value and another function to call after the outer function does its thing 
function d(func,


var d = [1,2,3,4,5];

var e = d.reduce(function(item) { return item % 2 === 0 ? item : null} )
console.log(e);
