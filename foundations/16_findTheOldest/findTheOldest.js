const findTheOldest = function(arr) {
  let arr_age = [];
  for (person of arr) {
    let age = person.yearOfDeath - person.yearOfBirth;
    arr_age.push(age);
  }
  let oldest = Math.max(...arr_age);
  let index_oldest = arr_age.indexOf(oldest);

  return arr[index_oldest];
};

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
