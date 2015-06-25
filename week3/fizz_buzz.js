// My Fizz Buzz Solution


var i;
for (i=0; i<101; i++) {
  if (i % 15 === 0) {
    console.log('buzz');
  }
  if (i % 3 === 0 ) {
    console.log('fizz');
  }
  if (i % 5 === 0) {
    console.log('fizz_buzz');
  }

  else {
    console.log(i);
  }
}

// Exercise: turn this into a function that prints 'fizz' if a number is divisible by 3, 'buzz' if a number is 
// divisible by 5, and 'fizzbuzz' if a number is divisible by 15.  The catch is that the function should accept 
// a variable called max which should determine the upper limit of the fizz buzz function.
