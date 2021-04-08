//Execution Context, Hoisting ,Scope
// console.log(nama);
// var nama = 'Latina';

//Creation Phase pada global Context
// nama variable = undefined
// nama function = fn();
// ITULAH yang dinamakan hoisting

// JS mendifinisikan window = global scope
// dan this = window

//Exuction Phase


// var nama = 'Latina';
// var umur = 10;
// console.log(sayhallo());

// function sayhallo() {
//     return `Hallo ,nama saya ${nama},saya umur ${umur}-tahun`;
// }
//function membuat Local Execution Context
//Yang didalam nya terdapat creation dan execution phase;
//window ,dan arguments ,hoisting

//===================================================
var nama = 'Latina';
var namauser = '@latina123';

function cetak1(namauser) {

    var facebook = 'http://facebook.com/';
    return facebook + namauser;
}
console.log(cetak1(namauser));
//=================================================== 
//===================================================
var nama = 'Latina';
var username = '@latina123';

function cetak() {
    console.log('ini Arguments: ' + arguments[0]);

    var facebook = 'http://twiter.com/';
    return facebook + username;
}
console.log(cetak('@hatena'));
//=================================================== 
//===================================================
function a() {
    console.log('ini a: ');

    function b() {
        console.log(`ini b:`);

        function c() {
            console.log('ini c: ');
        }
        c();
    }
    b();
}
a();
//=================================================== 
//===================================================

function satu() {
    var nama = 'latina';
    console.log(nama);
}

function dua() {
    console.log(nama);
}
console.log(nama);
var nama = 'Hatena';
satu();
dua('Lili');
console.log(nama);