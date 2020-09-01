for (var i = 1; i <= 10; i++) {
    if (i <= 6 && i !== 5) {
        console.log(i + ' Angkot Beroprasi');
    } else if (i === 8 || i === 10 || i === 5) {
        console.log(i + ' Sedang Lembur');
    } else {
        console.log(i + ' Sedang Tidak Beroprasi')
    }
}