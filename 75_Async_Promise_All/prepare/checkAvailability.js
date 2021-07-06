// object untuk menyimpan state dari mesin kopi
const state = {
    stock: {
        coffeeBeans: 205,
        water: 1000
    },
    isCoffeeMachineBusy: false
}

// check ketersediaan 
const checkAvailability = ( ) => {

    return new Promise((resolve, reject ) => {

        setTimeout(() => {

            if(!state.isCoffeeMachineReady){
                resolve("Mesin Kopi siap digunakan")
            }else {
                reject("Maaf, mesin sedang sibuk")
            }

        }, 1000);

    })
}

// cek biji kopi cukup/tidak dan mengubah status mesin kopi menjadi sibuk
const checkStock = () => {
    return new Promise((resolve, reject) => {

        state.isCoffeeMachineBusy = true;

        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};
 
// mencampurkan kopi dgn air, mngmbalikan promise dgn status resolve 
    // yang membawa 'kopi sudah siap!'
const brewCoffee = () => {
    console.log("Membuat kopi anda ..... ");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap !")
        }, 2000);
    })
}

const boilWater = ( ) => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan Air");
        setTimeout(() => {
            resolve("Air sudah panas")
        }, 2000);
    })
}

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {

        console.log("Menggiling biji kopi ......");
        
        setTimeout(() => {
            resolve("Kopi sudah siap! ")
        }, 1000);

    })
}

// fungsi grindCoffeeBeans dan boilWater berjalan bersamaan
    // dgn promise.all untuk menjalankannya 

module.exports = {state, checkAvailability, brewCoffee, checkStock, boilWater, grindCoffeeBeans}