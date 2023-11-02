function sameNumbers(param) {
    let reversed_param = param.toString().split("").reverse().join("");
    let sum = 0;

    for (let i = 0; i < reversed_param.length; i++) {
        sum += Number(reversed_param[i]);
    }

    if (param == reversed_param) {
        console.log('true')
    }
    else {
        console.log('false')
    }

    console.log(sum)
}

sameNumbers(2222222)
sameNumbers(1234)