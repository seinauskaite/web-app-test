const path = require('path');
// paskutine
console.log(path.basename('https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file'));

console.log(path.basename(__filename)); //failo pavadinimas
console.log(path.basename(__dirname)); //failo aplankas
console.log(path.extname(__filename)); //failo tipas
console.log(path.parse(__filename));  //failo informacijos objeckas

//prie failu kelio pridedamas failo aplankas ir failas ???? nzn kam?
console.log(path.join(__dirname, 'test', 'test.html'));