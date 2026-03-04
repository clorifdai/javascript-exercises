const palindromes = function (word) {
  let word_copy = word.slice(0);
    let res = [];
  
    for (let i = word_copy.length - 1; i >= 0; i--) {
        res.push(word_copy[i]);
    }
    word_copy = res.join('');

    if (word_copy === word) {
      return true;
    } else {
      return false;
    }

  };

// Do not edit below this line
module.exports = palindromes;
