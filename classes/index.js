'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');

/**
 * Implement a car using a Constructor
 * @function
 * @param {string} Assigns name to new instance of that vehicle
 */
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

/**
 * Implement a motorcycle using a Constructor
 * @function
 * @param {string} Assigns name to new instance of that vehicle
 */
const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

/**
 * Implement a car and motorcycle using a Class
 * @function
 * @param {string} Assigns name to new instance of both vehicle
 */
const subaru = new VehicleClass.Car('Subaru Legacy');
console.log(subaru.name, subaru.drive(), subaru.stop());

const honda = new VehicleClass.Motorcycle('honda');
console.log(honda.name, honda.wheelie(), honda.stop());


