const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;

        setTimeout(() => {
            if(seeds >= 10){
                resolve("Kopi didapatkan !")
            }else{
                reject("Biji kopi habis !")
            }
            
        }, 1000);
    })
}

async function makeCoffee() {
    
    // fungsi async await hanya dapat menangani resolve
    // untuk menangani rejected bisa menggunakan try catch untuk menangani rejected

    try{
        const coffee = await getCoffee()
        console.log(coffee);

    }catch(rejectedReason){

        console.log(rejectedReason);
    }
    
}


// Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous.

// keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.

