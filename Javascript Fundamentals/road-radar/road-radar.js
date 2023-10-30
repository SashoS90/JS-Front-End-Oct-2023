function roadRadar(speed_km, area) {
    let speedDifference = 0;
    let speedingLevel = ''

    const area_limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    speedDifference = area_limits[area] - speed_km;

    if (speedDifference < 0) {
        if (Math.abs(speedDifference) <= 20) {
            speedingLevel = 'speeding';
        }
        else if (Math.abs(speedDifference) <= 40) {
            speedingLevel = 'excessive speeding';
        }
        else if (Math.abs(speedDifference) > 40) {
            speedingLevel = 'reckless driving';
        }
    }

    if (speedingLevel != '') {
        console.log(`The speed is ${Math.abs(speedDifference)} km/h faster than the allowed speed of ${area_limits[area]} - ${speedingLevel}`)
    }
    else {
        console.log(`Driving ${speed_km} km/h in a ${area_limits[area]} zone`)
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')