## Some Exercises

#1 Let the User In
  + do a little internet research to find out how to compare two strings in JavaScript to see if they are equal.
  + add that code to the if () clause below to test if the `user_attempt` matches the `user_password`.

````javascript

var user_pw = '$FA8*xuD9';
var user_attempt = '$FA8*xuD8';

if ( DOES ENTERED PASSWORD MATCH USER PASSWORD? ) {
  debug('user admitted');
}
else {
  debug('unsuccessful match. please try again.');
}

````

## An Array of Names

We didn't talk about this in class, but  an `array` is a container for multiple variables. It's useful if we want to store a collection of data in a sequence where we can depend on the order remaining the same each time we access it. 

We create an array like this:

````javascript
var names = [];
````

We can add things to it like this: 

````javascript

names.push('bob');
names.push('mary');
debug(names);
// this prints [ 'bob', 'mary' ]
````

The exercise:
  + add the following list of names to an array called names: 'bob', 'mary', 'mark', 'jeanne', 'jack', 'anne'
  + then remove them from that array by calling the  `names.pop()` function until the array is empty again
  + verify the array's length with `names.length`.  Notice we used the `.length` property on a string.  we can also use it on an array.

EXERCISE 3:

Use JavaScript to convert 12 degrees Celcius to Fahrenheit.  Convert 98 degrees Fahrenheit to Celcius.
