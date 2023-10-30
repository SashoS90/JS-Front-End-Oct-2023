function sumDigits(param) {
    let result = 0;
    let stringParam = param.toString();
    for (let i = 0; i < stringParam.length; i ++) {
      result += Number(stringParam[i])
    }
    console.log(result)
  }
  
  sumDigits(245678)
  sumDigits(97561)
  sumDigits(543)