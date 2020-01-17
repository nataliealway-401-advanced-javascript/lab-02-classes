'use strict';
/**
 * Vehicle Constructor
 * @param  {} name
 * @param  {} wheels
 */
const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

/**
 * @function
 * @returns {string}
 */
Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

/**
 * @function
 * @returns {string}
 */
Vehicle.prototype.stop = () => {
  return 'Stopping';
};


/**
 * Car Constructor
 * @param  {} name
 */
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

/**
 * @function
 * @returns  {object} 
 */
Car.prototype = new Vehicle();

/**
 * Motorcycle Constructor
 * @param  {} name
 */
const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

/**
 * @function
 * @returns  {object} 
 */
Motorcycle.prototype = new Vehicle();

/**
 * @function
 * @returns  {string} 
 */
Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

/**
   * Exports Car and Motorcycle objects
   * @module Car/Motorcycle
   */
module.exports = {Car, Motorcycle};
