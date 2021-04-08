//Arrow Function

// const tampilnama = function(nama) {
//     return `Hallo ${nama}`;
// }
// console.log(tampilnama('Latina'));

// const tampilnama = (nama) => { return `hallo ${nama}`; }
// console.log('Hatena');

//==============================================
//Kalo argument cuma dua harus pakai kurung
//tipedata namafunction = (argument1,argument2) => {}
//==============================================
// const tampilnama = (nama, waktu) => {
//     return `Selamat ${waktu} ,${nama}`;
// }
// console.log(tampilnama('Kafuu', 'pagi'));

//==============================================
//Kalo argument cuma satu tidak perlu kurung
//tipedata namafunction = argument1 => {};
//==============================================
// const tampilnama = nama => {
//     return `Selamat ${waktu} ,${nama}`;
// }
// console.log(tampilnama('Kafuu'));
//==============================================

//==============================================
//Implisit Return
//==============================================
// const tampilnama = nama => `Selamat ${waktu} ,${nama}`;
// console.log(tampilnama('Kafuu', 'pagi'));
//==============================================

//==============================================
//Tanpa Argument /Parmeter
//==============================================
// const tampilnama = () => `Hallo world`;
// console.log(tampilnama());
//==============================================

//==============================================
//Dalam bentuk Function 
//==============================================
let mahasiswa = ['Latina', 'Hatena', 'Kafuu'];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);
//==============================================

//==============================================
//Dalam bentuk object
//==============================================
let jumlahHuruf2 = mahasiswa.map(nama =>
    ({
        nama,
        jmlhHuruf: nama.length
    })
);
console.table(jumlahHuruf2);
console.log(jumlahHuruf2);
//==============================================