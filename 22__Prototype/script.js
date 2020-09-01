// //4. Constract Function() 

function Mahasiswa2(nama, energy) {
    // let this.mahasiswa ={};
    //let this = object.create(mahasiswa.prototype);//PROTOTYPE
    this.nama = nama;
    this.energy = energy;
}
Mahasiswa2.prototype.makan = function(porsi) {
    this.energy += porsi;
    return `Hallo ${this.nama},Selamat Makan`;
}
Mahasiswa2.prototype.main = function(jam) {
    this.energy -= jam;
    return `Hallo ${this.nama} ,Selamat Bermain`;
}
Mahasiswa2.prototype.tidur = function(jam) {
    this.energy += jam;
    return `Hallo ${this.nama} ,Selamat Tidur`;
}

let Kafuu = Mahasiswa2('Kafuu', 10);
let Chino = Mahasiswa2('Chino', 20);


//Versi Class
class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        return `Hallo ${this.nama},Selamat Makan`;
    }
    main(jam) {
        this.energy -= jam;
        return `Hallo ${this.nama} ,Selamat Bermain`;
    }
    tidur(jam) {
        this.energy += jam * 2;
        return `Hallo ${this.nama },Selamat Tidur`;
    }
}
let lili = new Mahasiswa('Lili ', 10);
let loli = new Mahasiswa('Loli ', 10);
//