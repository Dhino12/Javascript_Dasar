// Map
const myMap = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
    [1,"satu"],
    [true, 1]
]);

console.log(myMap);

// get & set di MAP
console.log("==== set & get =====");
console.log(myMap.get("Jakarta"));
console.log(myMap.get(true));
myMap.set("United State","Washington DC")
console.log(myMap.get("United State"));

console.log("==== has & delete =====");
console.log(myMap.has("United State"));
console.log(myMap.delete("United State"));

