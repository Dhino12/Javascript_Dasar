var tanya = true;
while (tanya) {
    //Menangkap Pilihan PLayer
    var p = prompt('Pilihan: Gajah ,Semut ,Orang');

    //Menangkap Pilihan Computer
    var comp = Math.random();
    //Membangkitkan Bilangan Random
    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp < 0.77) {
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }
    console.log(comp);

    //Menentukan Rules
    var hasil = '';
    if (p == comp) {
        hasil = 'Seri';
    } else if (p == 'Gajah') {
        // if (comp == 'Orang') {
        //     hasil = 'Menang';
        // } else {
        //     hasil = 'Kalah';
        // }
        hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
    } else if (p == 'Orang') {
        if (comp == 'Gajah') {
            hasil = 'Kalah';
        } else {
            hasil = 'Menang';
        }
    } else {
        hasil = 'Input Tidak Valid';
    }

    //Tampilkan Hasil
    alert('Kamu Memilih: ' + p + ' Komp Memilih: ' + comp + '\n Maka Hasil: ' + hasil);
    tanya = confirm('lagi ?');
}