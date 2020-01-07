'use strict';

class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
 }
 drive(){
     return 'Moving Forward';
 }
 stop(){
     return 'Stopping';
 }
}

class Car extends Vehicle {
    
}

class Motorcycle extends Vehicle {
    
}

module.exports = Motorcycle;
module.exports = Car;