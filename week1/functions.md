## Why use Functions?

In a "real-world" situation, we might be forced with a problem or a service that we'd like to provide to users.  Treating the task as one big problem is often overwhelming, so it's best to break the ultimate problem into a set of simpler problems that take care of a distinct part of the overall problem. When solved together, these simpler problems yield the result we want. 

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

In a programming language like Javascript, functions are a little bit different.  They can turn input into output, but they can also do a bunch of other things that don't have to do just with input and output! For example, they can write to the console, affect the browser window, sleep for 5 seconds, etc.

That's all I have to say about functions right now.  Think of functions as a building block for parts of a program.

## Variables

Variables are names for values that you want to store and be able to conveniently refer to.

var name = value // ok
var me ='alex'
var age = 5000
var can_vote = true
