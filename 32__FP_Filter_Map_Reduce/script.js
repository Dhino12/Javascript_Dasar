const angka = [-2, -4, -1, -5, 4, 0, 2, 1, 5, 3];

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