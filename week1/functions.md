## What is a Function?

If we have a problem or an idea of a service we'd like to provide to users, the process generally goes something like this: we break that into a set of simpler problems that take care of just a part of the overall problem. When solved together, these simpler problems yield the result we want. 

Here's an example: If I want to get the top five most frequent words that a given Twitter user tweets over the course of a week, there are set of smaller problems that I need to solve in order to get the final result.  I need to:

+ Connect with a Twitter server. 
+ Prepare the proper search terms and then run the query (or capture the stream from Twitter's real-time tweet stream). 
+ Apply an algorith to the data
+ Present that data in a readable way

This means that my Javascript code should have at the very least the same number of functions as there are steps listed above, one for each sub-problem of the overall problem. 


In functions strictly take in input and return ouput. in a programming language implementation, at least conceptually,  functions do this  and often more! for example they write to files, affect the visual display, sleep for 5 seconds.  

a function is a house for some code, statements or expression that are run top down in order inside that house.

when we start a new javascript file or console session, we are by default inside a function called the main function. this indicates that a program can have functions inside of functions.

here is where we name,  manipulate and save values.

c to f
take the c
covert it to f
give back f


variables

var name = value // ok
var me ='alex'
var age = 5000
var can_vote = true
