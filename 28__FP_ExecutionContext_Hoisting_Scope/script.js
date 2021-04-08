// Execution Context , Hoisting & Scope

console.log(nama);
var nama = 'Latina';

// Creation Phase pada Global Context

// ====== Hoisting ======
// jika variable di panggil dulu sebelum deklarasi 
// akan di set default = undefined jika variable ditemukan
// Jika Function = fn() itu sendiri
// window = sebagai global object
// this = sebagai window 
// =======================

// Execution Phase
// Menjalankan code
// console.log(sayHallo); // tanpa execution
var name = 'cocoa';
var umur = 16;

console.log(sayHallo()); // dengan execution
function sayHallo() {
    // console.log(`Hallo Saya ${name} umur sama ${umur} tahun`); // undefined karena hoisting lagi
    return `Hallo Saya ${name} umur sama ${umur} tahun`; // tidak undefined
}

// jika ketemu function membuat local execution context
//yang didalam terdapat creation phase dan execution phase

// Jika Local Execution Context dapat mengakses = window ,arguments, hoisting

// var nama = 'mocha'
var userName = '@mocha';

function cetakURL(username) {
    console.log(arguments);
    var instagram = 'http://instagram.com/';
    return instagram + username;
}

console.log(cetakURL(userName));
// console.log(cetakURL("Latina"));
// ==================================

function a(){
    console.log('ini a');

    function b (){
        console.log("ini b");

        function c(){
            console.log("ini c");

        }

        c();
    }

    b();
}
a();

//=================
function satu(){
    var chara = "Cocoa";
    console.log(chara);
}

function dua(){
    console.log(chara);
}

console.log(chara);
var chara = "Rize";
satu();
dua("Chiya");
console.log(chara);