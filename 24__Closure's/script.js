function init() {
    // let nama = 'Latina';
    // let umur = 10;

    function tampilnama(nama) {
        console.log(nama);
        // console.log(`Umurnya ${umur} tahun`);
    }
    //========= Sama saja
    //Function Factories
    // return function(nama) {
    //         console.log(nama);
    //     }

    //menampilkan function dalam console
    console.dir(tampilnama);
    // tampilnama();
    return tampilnama;
}
// init();
let panggilnama = init();
panggilnama('Hatena');


//========= Function Factories =======
function ucapkansalam(waktu) {
    return function(nama) {
        console.log(`Hallo ${nama},Selamat ${waktu}`);
    }
}
let pagi = ucapkansalam('pagi');
let siang = ucapkansalam('siang');
let malam = ucapkansalam('malam');

console.dir(pagi('Kafuu'));

pagi('Latina');
siang('Kirin');