const getTheTitles = function(arr) {
  let arr_hel = [];
  for (arr_l of arr) {
    arr_hel.push(arr_l.title);
  }
  return arr_hel
};

// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ];

// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
