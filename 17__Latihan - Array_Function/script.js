var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    //Jika Angkot kosong
    if (penumpang.length == 0) {
        //Tambah penumpang di awal Array 
        penumpang.push(namaPenumpang);
        //Kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //Telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //Jika ada kursi kosong 
            if (penumpang[i] == undefined) {
                //Tambah Penumpang Di kursi Tersebut
                penumpang[i] = namaPenumpang;
                //Kembalikan isi Array & keluar dari function
                return penumpang;
            } //Jika Sudah Ada nama yang sama 
            else if (penumpang[i] == namaPenumpang) {
                //Tampilkan Pesan Kesalahan
                console.log(namaPenumpang + 'Sudah Ada dalam angkot');
                //Kembalikan isi array & keluar dari function
                return penumpang;
            } // Jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                //Maka Tambah Penumpang di akhir array
                penumpang.push(namaPenumpang);
                //Kembalikan Isi array & keluar dari function
                return penumpang;
            }
        }
    }
}
var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot Masih Kosong');
        return penumpang;
    } else {

        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + 'Tidak Ada dalam Angkot');
                return penumpang;
            }
        }
    }
}