function factorial (n) {
  if(isNaN(n) || !Number.isInteger(n)) {
    return 'Something wrong';
  } else if (n <= 0) {
    return 1;
  } else {
    return n* factorial(n-1);
  }
}
factorial(5);
//========================================================
//========================================================

function fibonacci (n) {
  if(isNaN(n) || !Number.isInteger(n)) {
    return 'Something wrong';
  } else if (n <= 1) {
    return n;
} else {
  return fibonacci(n-1) + fibonacci(n-2);
  }
}
fibonacci(8);
//========================================================
