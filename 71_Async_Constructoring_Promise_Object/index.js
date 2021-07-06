// membuat object promise perlu menetapkan resolver function / executor function
// const coffee = new Promise()

const executorFunction = (resolver, reject) => {
    const isCoffeeMarkerReady = true

    if(isCoffeeMarkerReady){
        resolver("Kopi berhasil dibuat")
    }else{
        reject("Mesin kopi tidak bisa digunakan")
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction)
}

const coffeePromise = makeCoffee()
console.log(coffeePromise);