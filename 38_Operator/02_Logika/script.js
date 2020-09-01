

let a = 10;
let b = 12;

console.log("==== AND Operator ====");
console.log(a < 15 && b > 10); // (true && true) = true
console.log(a > 15 && b > 10); // (false && true) = false
console.log(a > 15 && b < 10); // (false && false) = false

console.log("==== OR Operator ====");
console.log(a < 15 || b > 10); // (true || true ) = true
console.log(a > 15 || b > 10); // (false || true ) = true
console.log(a > 15 || b < 10); // (false || false ) = false 

console.log("==== NOT Operator ====");
console.log(!(a < 15)); // !(true) = false
console.log(!(a > 15)); // (false) = true