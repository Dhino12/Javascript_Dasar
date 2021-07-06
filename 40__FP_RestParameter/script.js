// =========== REST PARAMETER ==========
console.log("======= REST PARAMETER =======");
function myFunc(a ,b , ...myArgs){
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    // return Array.from(arguments); // mengubah arguments menjad array
    // return [...arguments] // mengubah arguments menjad array dengan spread oprator
}

console.log(myFunc(1,2,3,4,5));


function jmlhkan(...angka){
    /// ------- dengan forOf ----------
    // let total = 0;
    // for(const a of angka){
    //     total += a;
    // }
    // return total;

    /// ------- dengan reduce ----------
    return angka.reduce((a,b) => a + b);
}

console.log(jumlhkan(1,2,3,4,5));

console.log("======= Array Destructuring =======");
const kel1 = ['Chino','Maya','Megu'];
const [ketua,wakil, ...anggota] = kel1
console.log(ketua);

console.log("======= Object Destructuring =======");
const team = {
    pm = 'Chiya',
    frontEnd = 'Rize',
    frontEnd = 'Cocoa',
    backEnd = 'Mocha',
    ux = 'aoyama',
    devOps = 'Sharo'
}

const {pm , ...myTeam} = team
console.log(pm);

console.log("======= Filtering =======");
function filterBy(type, ...values){
    return values.filter(v => typeof v === type)
}
console.log(filterBy('number',1,2,'Emilia',false , 10, true, 'Rem'));