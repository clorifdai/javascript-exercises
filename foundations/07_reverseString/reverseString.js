const reverseString = function(sentence) {
  let splitSentence = sentence.split("");
  let reverseArray = splitSentence.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
