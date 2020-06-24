'use strict'

// Remove duplicates

let array = [1, 2, 3, 3, 4, 4, 5];

const uniqValuesArray = [...new Set(array)];

console.log(uniqValuesArray);