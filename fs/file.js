const fs = require('fs');


// fs.readFile('./file.txt', {encoding: 'utf-8'}, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.appendFile('./file.txt', 'NEW CONTENT\n', (err, data) => {
    if(err) throw err;
    console.log('FINE!');
})

