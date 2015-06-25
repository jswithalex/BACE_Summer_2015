## Week 3 assignment: split_on_char (for start of week 4)

Try out the .split() method on a string in your web browser or text editor to get a feel for how it works (assuming we didn't get to this in class).  If you feel up for it, read this Mozilla article on the [split method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

Then write a function definition for a function called `split_on_char` that takes two arguments, a string and a character to split on.  This is a stand-alone and scaled-down version of the string.split() method.

Here is an outline of the function
````
function split_on_char(string_to_split, split_char) {
  var results_array = [];

  // code to split the input string into multiple strings

  return results_array;
}
````

For example, if I split 'elephant' on 'e', the function call would look like this:

````
var resulting_array = split_on_char('elephant','e');
````

The results would look like this

````

console.log(resulting_array);
['l','phant'];
````

*Note:*
If you're having trouble, try to think about the problem in some depth before you start coding it.  Don't just google it.  Run through it with a pen and some paper, then translate that into code. This will help you develop problem-solving skills, whereas Googling the solution will not.
