/* ============= Prototype Inheritance =============== */

// --- Constracttor Function --- //
function mahasiswa(nama, energi) {
    // let mahasiswa = Object.create(Parent)
    this.nama = nama;
    this.energi = energi;
}

mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama},selamat makan`;
}

mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Hallo ${this.nama},selamat bermain`;
}

mahasiswa.prototype.tidur = function (jam) {
    this.energi = jam * 2;
    return `Hallo ${this.nama},selamat tidur`;
}

const mocha = new mahasiswa('mocha', 20);
console.log("== Prototype Inheritance ==");
console.log(mocha.nama);

/* ============= Class =============== */

class Siswa {
    constructor(name, energy) {
        this.nama = name;
        this.energi = energy;
    } 

    makan(porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama},selamat makan`;
    }

    main (jam) {
        this.energi -= jam;
        return `Hallo ${this.nama},selamat bermain`;
    }

    tidur(jam) {
        this.energi = jam * 2;
        return `Hallo ${this.nama},selamat tidur`;
    }
}
const cocoa = new Siswa('cocoa', 10);
console.log("== Prototype Inheritance ==");
console.log(cocoa.nama);