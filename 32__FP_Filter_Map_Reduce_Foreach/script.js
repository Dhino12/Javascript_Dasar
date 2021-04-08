// ! semua ini tidak bisa menggunakan operator break atau continue pada proses perulangan

const angka = [-2, -4, -1, -5, 4, 0, 2, 1, 5, 3];
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

//Mencari angka >= 3;

// For  ================================
console.log("=== filter dengan For ===");
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);

// Filter  ================================
console.log("=== filter dengan filter ===");

// const newNumber = angka.filter(function(a){
//     return a >= 3
// });

const newNumber = angka.filter(a => a >= 3); // dengan Arrow Function
console.log(newNumber);

// Map  ================================
console.log("=== Map ===");
const newNumb = angka.map(a => a * 2);
console.log("Default : " + angka);
console.log("Map : " + newNumb);

// Reduce  ================================
console.log("=== Reduce ===");
// accumulator = hasil dari looping
// currrentValue = element Array yang sedang Looping
// nilaiAwal = Optional
const result = angka.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(result);

// Chaining  ================================
console.log("=== Chaining ===");
// cari angka lebih besar dari 5 
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5) // 8,9,9
.map(a => a * 3) // 24, 27, 27
.reduce((acc, curr) => acc + curr);
console.log(hasil);

let greatAuthor = books.filter(book => book.sales > 1000000)
.map(writer => `${writer.author} adalah penulis buku ${writer.title} yang sangat hebat!`)

// Foreach  ================================
// fungsi ini tidak mengembalikan nilai apa pun.
console.log("=== Foreach ===");
const names = ['Joko', 'Eko', 'Riko', 'Yoko'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}`);
});