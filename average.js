'use strict'

let arrayNumbers = [2,2,2,2,2,2,2,2];

const total = arrayNumbers.reduce((mx, v) => mx + v, 0);

const average = total / arrayNumbers.length;
console.log(average);