// Konsep This pada Arrow Function

console.log(" =============================== ");
//Costructor Function
const Mahasiswa = function () {
    this.nama = ' Chino ';
    this.umur = 10;
    this.sayHello = function () {
        console.log(`Hallo ${this.nama}`);
    }
    console.log(this);
}

let chino = new Mahasiswa();
chino.sayHello();

console.log(" =============================== ");

// Arrow Function
const Mahasiswa2 = function(){
    this.nama = ' Chiya ';
    this.umur = 10;
    this.sayHello = () => {
        // Arrow Function tidak memiliki context this
        console.log(`Hallo ${this.nama}`);
        console.log(this);
    }
}

let chiya = new Mahasiswa2();
console.log(chiya.sayHello());


// Arrow Function dengan Object Literal
console.log(" =============================== ");
const mhs1 = {
    nama: 'cocoa',
    umur: 14,
    sayHello: () => {
        // Arrow Function tidak memiliki context this
        console.log(`Hallo ${this.nama}`);
        console.log(this);
    }
}
mhs1.sayHello();


console.log(" =============================== ");

// Arrow Function dengan Constructor Function
const Mahasiswa3 = function () {
    this.nama = ' Mocha ';
    this.umur = 10;
    this.sayHello = function () {
        console.log(`Hallo ${this.nama} umur Saya: ${this.umur}`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500)
}

let mocha = new Mahasiswa3();
mocha.sayHello() 