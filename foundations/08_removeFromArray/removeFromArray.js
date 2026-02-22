const removeFromArray = function(my_array, remove_element) {
  // Cari remove element pada array
  let index = my_array.indexOf(remove_element);
  if (index > -1) {
    my_array.splice(index, 1);
  }
  return my_array;
};

// Do not edit below this line
module.exports = removeFromArray;
