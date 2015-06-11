//
// VARIABLES
//
// a variable stores a value under a name 
//
// we can later access that value by that name
//


var user_age   =  24;
var user_first =  'Mike';
var user_last  =  'Jordan';

//
// LOGGING VALUES 
//
// you can print one or more values with console.log()
//
//

console.log(user_age);

// EXERCISE 1: log the values of user_first and user_last

// EXERCISE 2: add the first and last names with +

// EXERCISE 3: log twice the user's age

// EXERCISE 4: change user_age so that the value is twice the user's original age



//
//
// CONTROL FLOW
//
// our code can act conditionally: it will do one thing if case A is true and another if A is not true.
// 
// 

var voting_age = 18;

if (user_age > voting_age) {

  console.log(user_first,'can vote.');

}

else {

// EXERCISE 5: log a message that the user can't vote.

}

//
//
//  FUNCTIONS
//
//  Functions let us divide our code into sub-units
//

function get_length(name) {
  return name.length;
}

var user_name_length = get_length(user_name);

// EXERCISE 6: Can you make a guess as to why this fails? Uncomment it and reload the html page to see the error. 

// get_length(user_age);




