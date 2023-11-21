// *** Class Vehicle ***
// Create a class with the name Vehicle that has the following properties:
// type - a String
// model - a String
// parts - an object that contains:
// - engine - number (quality of the engine)
// - power - number
// - quality - engine * power
// fuel - a number
// drive - a method that receives fuel loss and decreases the fuel of the
// vehicle by that number.
// The constructor should receive the type, the model, the parts as an object,
// and the fuel.


class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power,
        }
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}


let parts = { engine: 6, power: 100, quality: 0 };
parts.quality = parts['engine'] * parts['power'];
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

// let parts = { engine: 9, power: 500, quality: 0 };
// parts.quality = parts['engine'] * parts['power'];
// let vehicle = new Vehicle('l', 'k', parts, 840);
// vehicle.drive(20);
// console.log(vehicle.fuel);