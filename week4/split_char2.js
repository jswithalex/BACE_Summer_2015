function split_on_char(split_char, s) {
  
  // managing storage for the result 

  var results = []; // result array holds the substrings
  var buffer = ''; 

  // go through each letter of the string once
  
  var i = 0;
  while (i < s.length) // in each loop, we check if at end of string
  {
	
    if (s[i] === split_char ) {
		results.push(buffer); // 'finalizing it'
		buffer = ''; // empty the buffer
    }
    else {
      buffer += s[i]; // adding to the buffer
    }
    i++;   

    // left over characters still in the buffer
  }
  if (buffer.length) {
    results.push(buffer);
  }

  return results;
}
