const fibonacci = function(num) {
  a = 0;
  b = 1;

  // Less than 0
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  } else if (num == 1) {
    return b;
  } else {
    for ( i = 1; i < num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b
  }
};

// console.log (fibonacci(9));

// Do not edit below this line
module.exports = fibonacci;
