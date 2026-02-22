const leapYears = function (year) {
  const empatTahun = year % 4 === 0;
  const seratusTahun = year % 100 === 0;
  const empatRatusTahun = year % 400 === 0; 
  
  if (empatTahun && (!seratusTahun || empatRatusTahun)) {
    return true;
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
