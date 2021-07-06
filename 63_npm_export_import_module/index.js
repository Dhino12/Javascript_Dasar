
// import 
const coffeaStock = require('./state')

const makeCoffea = (type, miligrams) => {
    if(coffeaStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat, masih ada " + coffeaStock[type] + " stock");
    }else{
        console.log("Biji kopi habis !");
    }
}

makeCoffea("javaneseCoffea", 80)
