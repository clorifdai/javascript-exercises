const repeatString = function(word, repeat_num) {
  if (repeat_num < 0) {
    return "ERROR";
  };
  let word2 = "";
  for ( let i = 0 ; i < repeat_num; i++) {
    word2 += word
  }
  return word2;
};


// Do not edit below this line
module.exports = repeatString;
