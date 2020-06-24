let array = [1, 2, 3, 4, 5, 5, 6, 7, 8];


var prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        const maxValue = Math.max(...array);
        reject(new Error("s"));
    }, 1000);
});

prom.then(val => {
    console.log('Value resolved ' + val);
}).catch(error => console.log(error))