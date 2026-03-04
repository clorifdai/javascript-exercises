const palindromes = function (word) {
  word_low = word.toLowerCase()
  let word_low_copy = word_low.slice(0);
  let res = [];
  
  for (let i = word_low_copy.length - 1; i >= 0; i--) {
      res.push(word_low_copy[i]);
  }
  word_copy = res.join('');

  if (word_low_copy === word_low) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
