//============ Cara Membuat Object =============
    // === Tidak Efektif untuk Object banyak ===
// 1. Object Literal
let mahasiswa = {
    firstName: "Latina",
    energy: 10,
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Selamat Makan ${this.firstName} `);
    }
}
console.log("=== Object Literal ===");
console.log(mahasiswa.firstName);


// 2. Function Declaration
// Harus Mereturn (object)

const methodSiswa = {
    makan :  function (porsi) {
        this.energy += porsi;
        console.log(`Selamat Makan ${this.nama} `);
    },

    main : function (jam) {
        this.energy -= jam;
        console.log(`Selamat Bermain ${this.nama}`);
    },

    tidur : function(jam){
        this.energy += jam * 2;
        console.log(`Halo ${this.nama} ,Selamat Tidur`);
    }
}

function Siswa(nama, energy) {
    let siswa = {};
    siswa.nama = nama;
    siswa.energy = energy;
    // solusi agar tidak memakan resource banyak
        // Tidak Efektif = ribet | solusi = object.create(parent)
    siswa.makan = methodSiswa.makan; 
    siswa.main = methodSiswa.main; 
    siswa.tidur = methodSiswa.tidur; 
    // =========================================

    // siswa.makan = function (porsi) {
    //     this.energy += porsi;
    //     console.log(`Selamat Makan ${firstName} `);
    // }

    // siswa.main = function (jam) {
    //     this.energy -= jam;
    //     console.log(`Selamat Bermain ${firstName}`);
    // }
    return siswa
}

let latina = Siswa("latina", 10);
let hatena = Siswa("hatena", 20);
console.log("=== Function Declaration ===");
console.log(latina.nama);
console.log(hatena.nama);

// 3. Constructor Function
function Murid(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Selamat Makan ${nama} `);
    }

    this.main = function (jam) {
        this.energy -= jam;
        console.log(`Selamat Bermain ${nama}`);
    }
}

let chino = new Murid("chino", 10);
console.log("=== Object Literal ===");
console.log(chino.nama);

//==============================================
function Anak(nama, energy) {
    let siswa = Object.create(methodSiswa);
    siswa.nama = nama;
    siswa.energy = energy;
    return siswa
}

let cocoa = Anak("cocoa",10);
console.log("=== Function Declaration Object.create ===");
console.log(cocoa.nama);