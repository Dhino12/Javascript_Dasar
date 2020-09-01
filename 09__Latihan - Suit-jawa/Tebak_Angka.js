var pilihan = true;

while (pilihan) {
    var p = prompt('Masukan Bilangan: [1-5]');
    var comp = Math.random();
    if (comp < 0.34) {
        comp = '1';
    } else if (comp >= 0.34 && comp < 0.77) {
        comp = '2';
    } else if (comp >= 0.77 && comp < 0.80) {
        comp = '3';
    } else if ((comp >= 0.80 && comp < 0.90)) {
        comp = '4';
    } else if ((comp >= 0.90 && comp < 1.2)) {
        comp = '5';
    }
    console.log(comp);
    var hasil = '';
    if (p == comp) {
        hasil = 'Tebakan Anda Benar';
    } else if (p != comp) {
        hasil = 'Tebakan Anda Salah';
    } else {
        hasil = 'Inputan Tidak Valid';
    }
    alert('Kamu Masukan: ' + p + ' Angka Yang Dicari: ' + comp + '\n' + hasil);
    tanya = confirm('lagi ?');
}