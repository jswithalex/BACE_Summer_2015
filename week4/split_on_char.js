var test_string = 'abcdceee';

function split_on_char(split_char,s) {

  var result_array = [];
  var substring = '';
  var i = 0;

  while(s[i]) {
    if (s[i] === split_char) {
      result_array.push(substring);
      substring='';
    }
    else {
      substring += s[i];
    }
    i++;
  }
  if (substring)
  {
    result_array.push(substring);
  }
  return result_array;
}

var result = split_on_char('c',test_string);
console.log(result);
