// penulisan asyncronous dengan gaya synchronous dapat menggunakan async await 


const  {
    state, checkAvailability, brewCoffee,checkStock,  boilWater, grindCoffeeBeans
} = require('./prepare/checkAvailability')

async function makeEspresso() {

    try{
        
        await checkAvailability()

        await checkStock()

        await Promise.all([boilWater(), grindCoffeeBeans()])

        coffee = await brewCoffee()

        console.log(coffee);

    }catch(rejectedReason){

        console.log(rejectedReason);

    }
    
}

makeEspresso()