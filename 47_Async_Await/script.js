// const coba = new Promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve('selesai')
//     },2000)
// });

// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu)
        } else {
            reject('Kelamaan')
        }
    });
}

// const coba = cobaPromise()
// coba
//     .then(coba20 => console.log(coba20))
//     .catch(coba => console.log(coba))

// ======= Async Await ========
// async function cobaAsync() {
//     const coba = await cobaPromise()
//     console.log(coba);
// }

async function cobaAsync() {
    try {
        const coba = await cobaPromise()
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}

cobaAsync()