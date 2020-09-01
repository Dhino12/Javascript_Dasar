//Membuat Object pada javascript

//1. Object Literal
//Tidak Efektif untuk object yang banyak
let mahasiswa = {
    nama: 'Latina',
    energy: 10,
    makan: function(porsi1) {
        this.energy = this.energy + porsi1;
        console.log(`Hallo ${this.nama},Selamat Makan `);
    }
}

//2. Function Declaration
// const methodMahasiswa = {

//     makan: function(porsi2) {
//         this.energy += porsi2;
//         console.log(`Hallo ${this.nama},selamat Makan`);
//     },
//     main: function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.jam},Selamat Bermain`);
//     }
// };

function Mahasiswa(nama, energy) {
    let Mahasiswa = {};
    Mahasiswa.nama = nama;
    Mahasiswa.energy = energy;
    // Mahasiswa.makan = methodMahasiswa.makan;
    // Mahasiswa.main = methodMahasiswa.main;
    Mahasiswa.makan = function(porsi2) {
        this.energy += porsi2;
        console.log(`Hallo ${this.nama},selamat Makan`);
    };
    Mahasiswa.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.jam},Selamat Bermain`);
    };
    return Mahasiswa;
}
let latina = Mahasiswa('Latina', 10);
let Hatena = Mahasiswa('Hatena', 20);

//3. Function Constraction
//keyword new
function Mahasiswa(nama, energy) {

    this.nama = nama;
    this.energy = energy;
    this.makan = function(porsi2) {
        this.energy += porsi2;
        console.log(`Hallo ${this.nama},selamat Makan`);
    }
    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.jam},Selamat Bermain`);
    }

}
let kirin = new Mahasiswa('Kirin ', 20);

//4. Object.create()
const methodMahasiswa = {

    makan: function(porsi2) {
        this.energy += porsi2;
        console.log(`Hallo ${this.nama},selamat Makan`);
    },
    main: function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.jam},Selamat Bermain`);
    }
};

function Mahasiswa2(nama, energy) {
    let Mahasiswa = Object.create(methodMahasiswa);
    Mahasiswa.nama = nama;
    Mahasiswa.energy = energy;
    // Mahasiswa.makan = methodMahasiswa.makan;
    // Mahasiswa.main = methodMahasiswa.main;
    return Mahasiswa;
}
let Kafuu = Mahasiswa2('Kafuu', 10);
let Chino = Mahasiswa2('Chino', 20);