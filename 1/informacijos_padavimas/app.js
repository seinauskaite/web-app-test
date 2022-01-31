const readline = require('readline');
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const diff = 2.54;

interface.question('Iveskite cm. \n', reiksme => {
    console.log('cm konvertuoti i colius: ' + (reiksme * diff));
    interface.close();
});