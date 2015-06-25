function reverse_string(s) {
  
  // This function runs forever, why?
  var s_array = s.split(''); 
  var reversed_string = '';
  while(s_array) {
    reversed_string += s_array.pop();
  } 

  return reversed_string;
}
