// *** Piccolo ***
// Write a function that:
// - Records a car number for every car that enters the parking lot 
// - Removes a car number when the car goes out 
// - Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted 
// in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty"


function parkingRegister(dataArray) {
    let parkingLot = [];

    dataArray.forEach((carData) => {
        let [operation, licencePlate] = carData.split(", ")

        if (operation === 'IN' && !parkingLot.includes(licencePlate)) {
            parkingLot.push(licencePlate);
        } else if (operation === 'OUT' && parkingLot.includes(licencePlate)) {
            let licencePlateIndex = parkingLot.indexOf(licencePlate);
            parkingLot.splice(licencePlateIndex, 1)
        }
    })

    if (parkingLot.length === 0) {
        console.log('Parking Lot is Empty')
    } else {
        console.log(parkingLot.sort().join("\n"))
    }

}


parkingRegister(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
    'IN, CA2822UU']
)

// parkingRegister(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']
// )