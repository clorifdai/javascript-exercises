const palindromes = function (word) {
  word_low = word.toLowerCase()
  let punctuation = [".", ",", ":", "!", "?"];
  
  // Remove punctuation character
  let word_arr = [];
  let word_arr_clean = [];
  for (word_low_l of word ) {
    word_arr.push(word_low_l)
  }

  for (word_arr_l of word_arr) {
    if (punctuation.includes(word_arr_l)) {
      continue;
    } else {
      word_arr_clean.push(word_arr_l)
    }
  }

  // Copy string and reverse
  let word_clean = word_arr_clean.join('');
  word_clean = word_clean.toLowerCase();
  let word_clean_copy_reverse = word_clean.split("").reverse().join("");

  // Determine whether a string is a palindrome
  if (word_clean === word_clean_copy_reverse) {
    return true;
  } else  if (word_clean !== word_clean_copy_reverse) {
    return false;
  }
};

// console.log(palindromes("racecar!"))

// Do not edit below this line
module.exports = palindromes;

