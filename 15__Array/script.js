var binatang = ['kucing', 'kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];
console.log(binatang[4]);

//Mengatahui Panjang Array
console.log(binatang.length);

//======================================================
//Memasukan tipe data berbeda dalam array
var myarr1 = ['mytext', 1, true];
console.log(myarr1[0]);

//======================================================
//Memasukan function ke dalam array
var myfunc = function() {
    alert('Hello World');
}
var myarra2 = ['mytext', 1, true, myfunc()];
console.log(myarra2[3]);

//======================================================
//Array Multidimensi 
var myarra3 = ['mytext', 1, true, myfunc, [1, 2, 3, 4]];
//myarra[arrayterluar][arrayterdalam];
console.log(myarra3[4][3]);