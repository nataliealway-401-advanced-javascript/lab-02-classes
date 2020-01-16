'use strict';
/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


 /**
  * Validator Function
  * @function
  */
let validator = {};

validator.isValid = (schema,data) => {

  let valid = true;

  for (let fieldName in schema.fields) {
    let field = schema.fields[fieldName];
    // Am I required and set?
    let required = field.required
      ? validator.isTruthy(data[fieldName])
      : true;
    // Am I the right type 
    let type = field.type
      ? validator.isCorrectType(data[fieldName], field)
      : true;
    // If anything is false ...
    if (!(required && type)) {
      valid = false;
    }
  }
  return valid;
};

/**
 * @function isString
 * @param {string} 
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * @function isNumber
 * @param {Object} 
 * @returns {boolean}
 */
validator.isNumber = (input) => {
  return typeof input === 'number';
};

/**
 * @function isArray
 * @param {array} valueType
 * @returns {boolean}
 */
validator.isArray = (input, valueType) => {
  return Array.isArray(input) && (valueType? input.every(val => typeof val === valueType): true);
};

/**
 * @function isObject
 * @param {object} 
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'object' && !(input instanceof Array);
};

/**
 * @function isFunction
 * @param {object} 
 * @returns {boolean}
 */
validator.isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * @function isBoolean
 * @param {object} 
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

/**
 * @function isString
 * @param {object} 
 * @returns {boolean}
 */
validator.isTruthy = (input) => {
  return !!input;
};

/**
 * @function isCorrectType
 * @param input
 * @param field
 * @returns {boolean}
 */
validator.isCorrectType = (input, field) => {
  switch(field.type){
  case 'string': return validator.isString(input);
  case 'number': return validator.isNumber(input);
  case 'array': return validator.isArray(input, field.valueType);
  case 'object': return validator.isObject(input);
  case 'boolean': return validator.isBoolean(input);
  default: return false;
  }
};

/**
 * Exports new validator instance
 * @module Validator
 */
module.exports = validator;

