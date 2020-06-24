let arr = [1, 2, 3, 4, 5];
arr = [...arr, 6, 7];

// console.log(arr);


const [a, b, ...iterableObj] = [1, 2, 3, 4, 5];
// console.log(a, b, iterableObj );

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));