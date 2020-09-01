//cara 1 - Function Declaration
function hallo() {
    console.log('Cara 1: ' + 'hallo');
    //This = Mengembalikan Object Global
    console.log(this);
}
hallo();

// Cara 2 - Object Literal
var obj = { a: 10, nama: 'Latina' };
obj.halo = function() {
    console.log('Cara 2: ' + 'Hallo');
    //this mengembalikan object yang bersangkutan
    console.log(this);
}
obj.halo();

// Cara 3 - Constructur
function Hallo2() {
    console.log('Cara 3: ' + 'Hallo');
    //this mengembalikan object yang baru dibuat
    console.log(this);
}
new Hallo2();

//This = Mengembalikan Object Global
console.log(this === window);
var a = 10;
console.log(this.a);