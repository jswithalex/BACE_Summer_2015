var i;
for (i=0;i<101;i++) {
  if (i % 15 === 0) {
    console.log('buzz');
  }
  if (i % 3 === 0 ) {
    console.log('fizz');
  }
  if (i % 5 === 0) {
    console.log('fizz_buzz');
  }

  else {
    console.log(i);
  }
}
