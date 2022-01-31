
console.log('col.\tcm.\t|\tcm.\tcol.');

// const skaicius = 2.14;

// for (let x = 1; x <= 10; x++) {
//     console.log((skaicius * x).toFixed(2));
// }


 for (let i = 1; i <= 10; i++) {
   const a = 2.54;
   const cm = (a * i).toFixed(2);
   const col = (i / a).toFixed(2);
   console.log(i + '\t' + cm + '\t|\t' + i + '\t' + col);
 }
