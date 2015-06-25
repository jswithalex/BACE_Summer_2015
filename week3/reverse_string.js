// This function will never terminate and thus will crash your browser.  Why?

function reverse_string(s) {

  var s_array = s.split(''); 
  var reversed_string = '';

  while(s_array) {
    reversed_string += s_array.pop();
  } 

  return reversed_string;
}

