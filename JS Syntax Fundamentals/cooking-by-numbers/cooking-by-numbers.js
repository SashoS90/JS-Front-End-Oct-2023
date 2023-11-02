function cookingByNumbers(numAsString, op1, op2, op3, op4, op5) {
    let number = Number(numAsString);
    let operationsArray = [op1, op2, op3, op4, op5]
    const operationsMap = {
        'chop': (number) => number /= 2,
        'dice': (number) => Math.sqrt(number),
        'spice': (number) => number += 1,
        'bake': (number) => number *= 3,
        'fillet': (number) => number *= 0.80,
    }

    for (let i = 0; i < operationsArray.length; i ++) {
        number = operationsMap[operationsArray[i]](number)
        console.log(number)
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')