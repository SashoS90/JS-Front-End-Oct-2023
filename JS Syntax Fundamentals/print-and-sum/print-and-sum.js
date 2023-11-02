function printAndSum(start, end) {
    let sum = 0;
    let result = ''
    for (let beginning = start; beginning <= end; beginning ++) {
      result += (beginning + ' ')
      sum += beginning
    }
    console.log(result.trim())
    console.log(`Sum: ${sum}`)
  }
  
  printAndSum(5, 10)
  printAndSum(0, 26)
  printAndSum(50, 60)