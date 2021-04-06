// set

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5); //  masukan value 5
numberSet.add(10);
numberSet.add(6);

console.log("===== Sebelum delete =====");
console.log(numberSet)

numberSet.delete(1) // delete value 1

console.log("===== Sesudah delete =====");
console.log(numberSet)