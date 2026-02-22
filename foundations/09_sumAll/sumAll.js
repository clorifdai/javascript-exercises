const sumAll = function(a, b) {
  let sum = 0;
  let arr_num = [];
  for (let i = a; i < b + 1; i++ ) {
    arr_num.push(i);
  }
  for (arr_num_l of arr_num) {
    sum += arr_num_l;
    console.log(sum)
  }

  return sum;
};
// x = sumAll(1, 4)
// console.log(x)
// Do not edit below this line
module.exports = sumAll;
