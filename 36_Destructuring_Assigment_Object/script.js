// Destructuring Varible / Assigment

// Destructuring Array

console.log("========== Destructuring Array ==========");
const perkenalan = ['hallo' , 'nama', 'saya', 'cocoa'];
// const [hallo, nama ,saya ,cocoa] = perkenalan;
// console.log(hallo);
// console.log(cocoa);
// console.log(saya);
// console.log(nama);

console.log("--- Skip Item ---"); 
const [hallo, , ,cocoa] = perkenalan; 
console.log(hallo);
console.log(cocoa);

console.log("--- swap item ---");
let a = 1;
let b = 2;
console.log("Sebelum: " + a);
console.log("Sebelum: " + b);
[a, b] = [b, a];
console.log("Sesudah: " + a);
console.log("Sesudah: " + b);

console.log("--- return value function ---"); 
function coba(){
    return [1,2];
}
const [d, e] = coba();
console.log(d[1]);
console.log(e);

console.log("--- Rest Parameter ---"); 
const [f, ...value] = [1,2,3,4,5,6];
console.log(value + f);

console.log();

console.log("========== Destructuring Object ==========");
const mhs = {
    nama : 'Mocha',
    umur : 19
}

    // variable dengan nama object harus sama
const {nama,umur} = mhs;
console.log("nama : " + nama + " umur " + umur);
console.log("------- Assigment tanpa deklarasi Object -------");

({name, age} = {
    name : 'Sayuki',
    age : 19
});

console.log("myName : " + this.name + " myAge " + this.age);

console.log("------- Assigment ke Variable Baru -------");
const belanja = {
    barang : 'Tango',
    harga : 2000
} 
const {barang: makanan ,harga: Rp} = belanja;
console.log("Makanan : " + makanan + " dengan Harga " + Rp);

console.log("------- Default Value ---");
const benda = {
    barang : 'Laptop',
    harga : 500000
} 

const {barang,harga, bonus = 'mouse'} = benda;
console.log("Barang : " + barang + " dengan Harga " + harga + " bonus " + bonus);

console.log("--- Default Value + new Variable Assigement ---");

const tiket = {
    tour : 'Prambanan',
    Rupiah : 500000,
} 

const {tour:tamasya ,Rupiah: harga1, Diskon: potonganHarga = '10%'} = tiket;
console.log("Tujuan : " + tamasya + " dengan Harga: " + harga1 + " Diskon: " + potonganHarga);

console.log("---- Dengan Rest -----");
const game = {
    judul : 'PES 2020',
    hargaGame : 470000,
} 

const {judul, ...values} = game;
console.log(judul );
console.log(values);

console.log("--- Mengambil Field Object Pass to Parameter ---");

const manga = {
    id : 10101,
    judul : 'KanoKari',
    hargaManga : 25000
} 

// function getIdManga(komik){
//     return komik.id
// }

function getIdManga({id ,judul}){
    // hanya ID dan nama
    return id + " Judul: " + judul
}
console.log("idManga: " + getIdManga(manga));