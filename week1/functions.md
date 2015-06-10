## Why use Functions?

I'm going to start with the topic of functions, which would usually be discussed in week 2 or 3 in a course like this.  My goal is to talk a little bit about what a program is from a bird's eye view and then start in on programming at ground-level.

In a "real-world" situation, we might be forced with a problem or a service that we'd like to provide to users.  Whatever the task may be, treating its soluation as one big problem is often overwhelming and inefficient, so it's best to break the ultimate problem into a set of simpler problems that take care of a distinct part of the overall problem. This is where functions come in.  They help you structure your approach to solving a problem.  When you solved in conjunction, these simpler problems produce the result we want. 

Here's an example: If I want to get the top five most frequent words that a given Twitter user tweets over the course of a week, there are set of smaller problems that I need to solve in order to get the final result.  I need to:

+ Connect with a Twitter server. 
+ Prepare the proper search terms and then run the query (or capture the stream from Twitter's real-time tweet stream). 
+ Apply an algorith to the data
+ Present that data in a readable way

This means that my Javascript code should have **at the very least** as many functions as there are steps listed above, one for each sub-problem of the overall problem. 


## What is a Function?

In math, functions express a relation between input and ouput. You may recall this formulation of a function:

f(x) : x<sup>2</sup>, or 'f of x is x squared'.

so, f(5) is 25.

In a programming language like Javascript, functions are a little bit different.  For one, functions are processes that actually work on real data. They exist in space-time.  For another, they have two parts: 1) the definition, which says what the function does with a given variable or variables, and 2) they are called or 'invoked', meaning that the stuff in their definition is replaced with actual values from the program and computations take place.

Like mathematical functions, Javascript functions can turn input into output, but they can also do a bunch of other things that don't have to do just with input and output. For example, they can write to the console, affect the elements in a browser window, sleep for 5 seconds, etc.

Here is a pseudo-program that has four functions in it, **connect_to_twitter**, **search**, **count_words**, and **show_results**.


````javascript

var api = connect_to_twitter(); // connect to twitter's server
var data = search({user:'snowden'}); // do a search for snowden
var word_count = count_words(data,'access');
show_results(word_count);

````

Notice that the function names are pretty clear in indicating what is probably going on.

## Variables

Variables are names for values that you want to store and be able to conveniently refer to.

var name = value // ok
var me ='alex'
var age = 5000
var can_vote = true
