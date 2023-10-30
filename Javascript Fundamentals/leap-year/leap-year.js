function findLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log('yes')}
      else {
        console.log('no')
      }
  }
  
  findLeapYear(1984)
  findLeapYear(2003)
  findLeapYear(4)
  findLeapYear(1900)