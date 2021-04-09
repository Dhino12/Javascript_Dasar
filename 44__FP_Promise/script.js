
// ========== Promise ===========
// Object yang merepresentasikan keberhasilan / kegagalan sebuah
// event yang asynchronous di masa yang akan datang
// Janji    ( terpenuhi     / ingkar )
// promise  ( fullfilled   / rejected  / pending)
// callback ( resolve     / reject    / finaly)
// aksi     ( then       / catch )

// contoh 1
let ditepati = true;
const janji1 = new Promise( (resolve, reject) => {
    if(ditepati){
        resolve('Janji Telah Ditepati') // ditangkap then
    }else{
        reject('Ingkar janji...') // ditangkap catch
    }
} )

janji1
.then(response => console.log('OK! : ' + response))
.catch(response => console.log('NOT OK! : ' + response))

// contoh 2
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve("Ditepati Setelah beberapa waktu");
        }, 2000);
    } else {
        setTimeout(() => {
            resolve("Tidak Ditepati Setelah beberapa waktu");
        }, 2000);
    }
});

console.log(" Mulai ");
// console.log(janji2.then( ( ) => console.log(janji2)))
janji2
    .finally(() => console.log("Selesai Menunggu"))
    .then((response) => console.log("OK! : " + response))
    .catch((response) => console.log("NOT OK! : " + response));

console.log(" Selesai ");

console.log("========== Menjalankan Banyak Promise sekaligus");
// promise.all
const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            judul: "Danmachi",
            sutradara: 'Chino',
            pemeran: 'Bell '
        }, ]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Kalimantan',
            temp: 20,
            kondisi: 'Berawan'
        }])
    },500)
});

film.then(response => console.log(response))
cuaca.then(response => console.log(cuaca))

// Menjalankan 2 / lebih Promise sekaligus
Promise.all([film,cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film ,cuaca] = response
        console.log(film);
        console.log(cuaca);
    })