let array = [1,2,3,3,3,3,4,5,6,4,4,6,7,8,8,88,9,7,8,9,9,9,8,7,78,988,89];

let uniqValueArray = array.filter((value, i) => array.indexOf(value) == i );
console.log(uniqValueArray);