const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (arr_l of arr) {
    sum += arr_l;
  }
  return sum
};

const multiply = function(arr) {
  let result = 1;
  for (arr_l of arr) {
    result *= arr_l;
  }
  return result;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
