// untuk menangani data promise 
    // bisa menggunakan .then(  )

const stock = {
    coffeeBeans: 250,
    water: 10000
}

const checkStock = () => 
    new Promise((resolve, reject) => {
        if(stock.coffeeBeans >= 16 && stock.water >= 250){
            resolve("Stock cukup. Bisa membuat kopi")

        }else{
            reject("Stock habis !")
            
        }
    })


// fungsi untuk menangani ktika reject dan resolve
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

// untuk menangani hasil kembalian dari checkStock yg mnghslkn promise 
checkStock().then(handleSuccess, handleFailure)