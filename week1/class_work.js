//
// VARIABLES
//
// a variable stores a value under a name 
//
// we can later access that value by that name
//


// var means 'variable' 
// NAMES and VALUES
var user_age   =  24; // integer
var user_first =  'Mike'; // string 
var user_last  =  'Jordan'; // string
var user_statement = "My name is 'Mike' ";


//debug(user_age);
//debug(user_first);
//debug(user_last);



//EXERCISE 2: add the first and last names together with a plus sign

//using the + symbol, 'mike' and 'jordan' becomes 'mikejordan'


// EXERCISE 3: create a new variable user_full_name that 

//var user_full_name = user_first + ' ' + user_last;

//debug(user_age--); // post-increment
//debug(--user_age); // pre-increment
//debug(user_first + 5);



//var canVote = (user_age >= 18);
//var canVote = user_age >= 18;





//combines user_first and user_last

// EXERCISE 4: log twice the user's age

// EXERCISE 5: change user_age so that the value is twice the 
// user's original age

// Assignment right to left

// LEFT SIDE: WHERE TO PUT IT ?
// RIGHT SIDE: WHAT TO PUT THERE ?

//
//
// CONTROL FLOW
//
// our code can act conditionally: it will do one thing if case A is true and another if A is not true.
// 
// 

/*
if (9 > 10) {

	debug('9 is greater than 10!');

}


if (9 < 10) {
	debug('9 is less than 10!')
}
*/


// EXERCISE: 

var pw = '$xihwefU7!';
debug(pw.length);


if (pw.length < 8) { // excludes 0- 7
  debug('password of incorrect length');
}

if (pw.length > 20) { // excludes 21 - infinity
  debug('password of incorrect length');
}

else { // falls within 8 and 20
	  debug('password long enough.');
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

var user_name_length = get_length(user_first);

// EXERCISE 7: Can you make a guess as to why this fails? Uncomment it and reload the html page to see the error. 

// get_length(user_age);




