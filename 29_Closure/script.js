function init() {
    // let nama = "Cocoa";
    // let umur = 20;

    // function tampilNama(nama,umur){
    //     console.log(nama,umur);
    // }
    return function (nama, umur) {
        console.log(nama, umur);
    }
    // console.dir(tampilNama);
    // tampilNama;
}
init();

let panggilNama = init();
panggilNama("Mocha", 10)



console.log("=====================");

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Hallo ${nama} Selamat ${waktu}`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatMalam("Chino");
selamatPagi("Maya");
selamatSiang("Megu");

console.log("======================");

let counter;
let add = (function () {
    counter = 0;
    return function () {
        return ++counter;
    };
})(); // imediatly function

// let a = add();

console.log(add());
counter = 10;
console.log(add());
console.log(add());