const fs = require('fs');
const path = require('path');

fs.stat(path.join(__dirname, '/testineDirektorija'), {}, (err, stats) => {
    if (stats == undefined) {
        fs.mkdir(path.join(__dirname, '/testineDirektorija'), {}, err => {
            if(err) throw err;
            console.log('Direktorija sukurta');
        });
    }
})

fs.writeFile(path.join(__dirname, '/testineDirektorija', 'test.html'), '<h1>Labukaaa</h1>', err => {
    if(err)throw err;
    console.log('Failas sekmingai sukurtas');
});

fs.readFile(path.join(__dirname, '/testineDirektorija', 'test.html'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

fs.rename(
    path.join(__dirname, '/testineDirektorija', 'test.html'),
    path.join(__dirname, '/testineDirektorija', 'test.html'),
  err => {
    if(err) throw err;
    console.log('Pervadintas');
  } 
)