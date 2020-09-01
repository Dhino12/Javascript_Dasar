//1.Menambah Array
var arr = ["a", 1, true];
console.log(arr[1]);

//2.Menghapus Array
var arra = ['Dhino', 'Rahmad', 'Kusuma'];
arra[1] = undefined;
console.log(arra);

//3. Menampilkan Isi Array  
var arra2 = ['Dhino', 'Rahmad', 'Kusuma'];
for (var i = 0; i < arra2.length; i++) {
    console.log(arra2[i]);
}
//1. Join
var arra3 = ['Dhino', 'Rahmad', 'Kusuma'];
console.log('Join: ' + arra3.join(' - '));

//2. Push Menambahkan sesuatu kedalam diakhir array
arra2.push('Hallo', 'World');
console.log('Push: ' + arra2.join(' - '));

//3. Pop Menghilangkan Sesuatu di akhir array
arra2.pop();
arra2.pop();
arra2.pop();
console.log('Pop: ' + arra2.join(' - '));

//4. Unshift Menambahkan diawal array
arra2.unshift('Hallo');
console.log('Unshift: ' + arra2.join(' - '));

//4.  shift Menghilangkan sesuatu diawal array
arra2.shift();
console.log('Shift: ' + arra2.join(' - '));

//5. Splice Menyisipkan Sesuatu ditengah
//splice(indexawal,maudihapusberapa,elementbaru1,2);
var arra4 = ['Illiya', 'Von', 'Irisviel'];
arra4.splice(2, 0, 'Hallo', ' chan');
console.log('Splice: ' + arra4.join(' - '));

//6. Slice mengambil array berdasarkan index
//sclice(awal,akhir);
var arra5 = ['hatena', 'kaguya', 'latina', 'Lilith'];
var arra6 = arra5.slice(1, 3);
console.log('Slice: ' + arra6.join(' - '));

//7.Foreach pengulangan berdasarkan panjang array
var cetak = function(e) {
    console.log('Foreach: ' + e);
}
arra5.forEach(cetak);
//atau dengan ini 
arra5.forEach(function(e) {
    console.log('Foreach 2: ' + e);
});

//Mengambil index array 
arra5.forEach(function(e, i) {
    console.log('Mahasiswa ke ' + (i + 1) + ' adalah ' + e);
});

//8.Map menjumlahkan / mengkalikan setiap isi array
var arra14 = [1, 2, 3, 4];
var angka2 = arra14.map(function(e) {
    return e * 2;
    // console.log(e);
});
console.log('Map: ' + angka2.join(' - '));

//9. Sort mengurutkan array
var arra7 = [1, 3, 2, 8, 6, 10, 20];
// arra6.sort(); atau dengan ini
arra7.sort(function(a, b) {
    return a - b;
});
console.log('Sort: ' + arra7.join(' - '));

//10.Filter
var angka3 = arra7.filter(function(a) {
    // return a == 3;
    return a > 5;
});
console.log('Filter: ' + angka3.join(' - '));

//11. Find Mencari Nilai yang pertama ditemukan
var angka4 = arra7.find(function(a) {
    // return a == 3;
    return a > 5;
});
console.log('Find: ' + angka4);