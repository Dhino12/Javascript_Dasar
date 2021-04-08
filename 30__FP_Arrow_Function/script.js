// Function Expresion

// const tampilNama = function(nama){
//     return `Hallo ${nama}`
// }

// console.log(tampilNama('latina'));

// Arrow Function
const tampilUmur = (nama ,waktu) => { return `Hallo ${nama} Selamat ${waktu}`}

console.log(tampilUmur('mocha'));

// Implicit Return
const tampilNama = nama =>  `Hallo ${nama}`;
console.log(tampilNama('cocoa'));

const tampilHello = () => `Hello World`;
console.log(tampilHello());

//==============================================================

let mahasiswa = ['Cocoa' ,'Mocha' ,'Rize' ,'Chino'];
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });

let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

let jmlhHuruf = mahasiswa.map(nama => ({
    name: nama,
    jumlahHuruf : nama.length
}))

console.log(jmlhHuruf);
console.table(jmlhHuruf);