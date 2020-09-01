//Menggunakan Closure
let add = (function() {
    let counter = 0;

    return function() {
        return ++counter;
    }
})();

//Tidak Tergangu dengan variable diatas
counter = 100;

console.log(add());
console.log(add());
console.log(add());