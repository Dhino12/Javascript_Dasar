
// multiple import
const {coffeeStock, isCoffeaMachineReady} = require('./state')

// dengan class 
const Tiger = require('./Animals/Tiger')
const Wolf = require('./Animals/Wolf')

const makeCoffea = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat, masih ada " + coffeeStock[type] + " stock");
    }else{
        console.log("Biji kopi habis !");
    }
}

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        
        console.log(tiger.strength);

        return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
        return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
};
  
makeCoffea("javaneseCoffea", 80)
console.log(isCoffeaMachineReady)

const myTiger = new Tiger();
const myWolf = new Wolf();

console.log(fight(myTiger,myWolf))