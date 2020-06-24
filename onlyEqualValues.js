let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arr2 = [1,2,4,6,7,8,9,10,11];

let mxArray = arr1.filter(value => arr2.find(value2 => value2 == value));

console.log(mxArray);