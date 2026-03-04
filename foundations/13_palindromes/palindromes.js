const palindromes = function (word) {
  let left = 0, right = word.length - 1;
  let word_copy = word.slice(0);
  word_copy = word_copy.split("");

  while (left < right) {
    [word_copy[left], word_copy[right]] = [word_copy[right], word_copy[left]];
    left++;
    right--;
  }
  word_copy = word_copy.join("")
  if (word === word_copy) {
    return true;
  } else {
    return false;
  };
    
  
};

// Do not edit below this line
module.exports = palindromes;
