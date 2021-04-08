// Destructuring 

function kalkulasi(a,b){
    return [a + b, a * b ,a - b ,a / b];
}

const jumlh = kalkulasi(2,3);
console.log(jumlh);

console.log("==== Urutan Berpengaruh ====");
const [jumlah ,kali ,kurang ,bagi = 'Tidak Ada'] = kalkulasi(2,3)
console.log("Hasil Jumlah" + jumlah);
console.log("Hasil Kali" + kali);
console.log("Hasil bagi" + bagi);
console.log("Hasil kurang" + kurang);


function kalkulasi2(a,b){
    return {
        tambah2 : a + b,
        kurang2 : a - b,
        kali2   : a * b,
        bagi2   : a / b
    }
}

console.log("==== Urutan Tidak Berpengaruh ====");
const {bagi2, kali2, tambah2, kurang2} = kalkulasi2(4,2);
console.log("Hasil Jumlah" + tambah2);
console.log("Hasil Kali" + kali2);
console.log("Hasil bagi" + bagi2);
console.log("Hasil kurang" + kurang2);

console.log("==== Destructuring Function Argument ====");
const mhs1 = {
    nama : 'cocoa',
    umur : 10,
    email : 'cocoa@gmail.com',
    nilai : {
        tugas : 80,
        uts : 90 ,
        uas : 70
    }
}

function cetakMhs(nama ,umur){
    return `Hallo Nama : ${nama} dan umur ${umur} tahun`
}
console.log(cetakMhs(mhs1.nama, mhs1.umur));

function printMhs(mhs){
    return `Hallo Nama : ${mhs.nama} dan umur ${mhs.umur} tahun`
}
console.log(printMhs(mhs1));

    //  ======= Destructuring Function ============
function printMahasiswa({nama,umur ,nilai:{ uas }}){
    return `Hallo Nama : ${nama} dan umur ${umur} tahun dan Nilai UAS ${uas}`
}
console.log(printMahasiswa(mhs1));