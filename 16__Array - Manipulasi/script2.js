//1. Membuat Array
var a = [1, true, 'Latina'];
console.log(a[2]);

//Menghapus Array
var b = [1, 2, 3, 4, 5];
b[2] = undefined;
console.log(b);

//Menampilkan isi array
var c = ['Latina', 'Hatena', 'Tadakoro ', 'Megumin'];
for (var i = 0; i < c.length; i++) {
    console.log(c[i]);
}

//Join
console.log('Join: ' + c.join(' - '));

//push
c.push('Chino');
console.log('Push: ' + c.join(' - '));

//Pop
c.pop();
c.pop();
console.log('Pop: ' + c.join(' - '));

//Unshift
c.unshift('Kirin');
console.log('Unshift: ' + c.join(' - '));

//Shift
c.shift();
console.log('Shift: ' + c.join(' - '));

//Splice
c.splice(1, 0, 'Iris');
console.log('Splice: ' + c.join(' - '));

//slice 
var d = c.slice(1, 3);
console.log('Slice: ' + d.join(' - '));

//Foreach
var e = function(f) {
    console.log('Foreach: ' + f);
}
d.forEach(e);

// ATAU
d.forEach(function(g) {
    console.log('Foreach: ' + g);
});
//Akses Index foreach
d.forEach(function(h, i) {
    console.log('Dia adalah: ' + h + ' Siswa ke- ' + (i + 1))
});

//Map
var j = [1, 2, 3, 4, 5];
l = j.map(function(k) {
    return k * 2;
});
console.log('Map: ' + l.join(' - '));

//sort
var m = [1, 3, 4, 2, 5, 6, 7, 9, 8, 10, 11];
console.log(m.sort(function(n, o) {
    return n - o;
}));

//Filter
var angka1 = m.filter(function(e) {
    return e > 5;
});
console.log('Filter: ' + angka1.join(' - '));

//Find
var angka2 = m.find(function(p) {
    return p > 5;
});
console.log('Find: ' + angka2);