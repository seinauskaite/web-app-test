const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/4'), {}, err => {
    if(err) throw err;
    console.log('Sukuriau direktorija pati ;)');
});

fs.writeFile(path.join(__dirname, '/4', '4.txt'), 'Labukas as paskutinis', err => {
    if(err) throw err;
    console.log('Sukuriau nauja faila pati ;)');
});

