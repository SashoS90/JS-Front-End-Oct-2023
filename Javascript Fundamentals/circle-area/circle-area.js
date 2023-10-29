function circleArea(argument) {
    let area = 0;

    if (typeof(argument) !== typeof(1)) {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(argument)}.`)
    } else {
        area = Math.PI * (argument *= argument)
        console.log(area.toFixed(2))
    }
}


circleArea(5)
circleArea(true)