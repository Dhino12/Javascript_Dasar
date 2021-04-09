
const  {state, checkAvailability, brewCoffee,checkStock} = require('./prepare/checkAvailability')

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock()
        })
        .then((value) => {
            console.log(value);
            return brewCoffee()
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false
        })
}

makeEspresso()