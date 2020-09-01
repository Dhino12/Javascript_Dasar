function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

//Lebih Flexibel

function coba() {
    var hasil3 = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil3 += arguments[i];
    }
    return hasil3;
}
//dari string jadi Int = parseINT()
var a = parseInt(prompt('Masukan Nilai 1: '));
var b = parseInt(prompt('Masukan Nilai 2: '));
var hasil = tambah(a, b);
var hasil2 = kali(tambah(1, 8), tambah(8, 9));
alert(hasil);
console.log(hasil2);

//Lebih Flexibel
var cobaaja = coba(1, 2, 3);
console.log('cobaaja');
console.log(cobaaja);