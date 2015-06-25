// Functions

// Functions are groups of statments

// Why Functions? Let's see what Crockford has to say
// https://www.youtube.com/watch?v=ya4UHuXNygM
// 19:13 - 21:30


// Here are some built-in functions that we don't have to write
// .split()
// math.pow()
// array.pop()


// split a string into an array
var s = "abc";
var s1 = s.split("");
var s2.split();

// filter out the odd numbers from a list
var nums = [1,4,5,7,2];
nums.reverse();
// nums is now [2,7,5,4,1]
nums.sort()
// [1,2,4,5,7]



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

function isEven(item) { return item%2 === 0 }
var e = d.reduce(isEven);
console.log(e);

function double(item){
   return item*2;
}

var f = d.map(double);

// IN CLASS INDIVIDUAL EXERCISES 

// http://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe
