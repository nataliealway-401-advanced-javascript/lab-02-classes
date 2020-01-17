'use strict';
/**
 * @class
 * @param  {string} name: name of the vehicle
 * @param  {number} wheels: number of wheels on the vehicle
 */
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  /**
   * @function drive
   * @returns {string}
   */
  drive(){
    return 'Moving Forward';
  }
  /**
   * @function stop
   * @returns {string}
   */
  stop(){
    return 'Stopping';
  }
}
/**
   * @class Car
   * @param {string} name: Inherits name of parent Class
   */
class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  } 
}

/**
   * @class Motorcycle
   * @param {string} name: Inherits name of parent Class
   */
class Motorcycle extends Vehicle {
  constructor(name){
    super(name, 2);
  }
  wheelie(){
    return 'Wheee!';
  }
}
/**
   * Exports Car and Motorcycle objects
   * @module Car/Motorcycle
   */
module.exports = {Car, Motorcycle};
