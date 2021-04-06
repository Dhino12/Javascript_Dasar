console.log("===== Object =====");
var Mahasiswa = {
    nama: "Latina",
    umur: 12,
    ips: [3.00, 2.00, 3.10],
    "jurusan kuliah": "Informatika",
    alamat: {
        jalan: "jl.hahaha",
        kota: "Jakarta",
        provinsi: "Jawa Barat"
    }
};

console.log(Mahasiswa.alamat.jalan);
console.log(Mahasiswa["jurusan kuliah"]);

// hapus property object
delete Mahasiswa.alamat


console.log("===== Object =====");
let Object = {key1: "Megu" , key2:"Chino" ,key3:"Maya"};
let user = {
    name:{
        first: "Hoto",
        last:"Cocoa"
    },
    age: 15, 
    hobby:"Nuang Kopi",
    teman: ["rize","chiya","syaro","chino","maya","megu"]
};

console.log(Object.key2);
console.log(user.name.first);
console.log(user.teman[1]);

console.log("My First Name is: \"" + user.name.first + "\" and last Name is \"" + user.name.last + "\"");