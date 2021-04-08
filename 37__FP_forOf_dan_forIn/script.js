const mhs = ['Chino','Maya','Megu'];

// ========= For of Tidak memilik Index ===========
console.log("==== Array ====");
for( const newVar of mhs){
    console.log("forOf: " + newVar);
}

console.log("==== String ====");
const nama = 'Chiya'
for( const newVar of nama){
    console.log("forOf: " + newVar);
}

console.log("==== String ====");
for( const [i, newVar] of mhs.entries()){
    console.log("forOf: " + newVar + " index : " + i);  
}

console.log("==== NodeList ====");
const  liNama = document.querySelectorAll('.nama');
for(const n of liNama){
    console.log("forOf: " + n.innerHTML);
}

console.log("==== Arguments ====");

function jumlahAngka(){
    let result;
    for(const i of arguments){
        result += i;
    }
    return result
}
// For in Hanya untuk Object

console.log("forOf: " + jumlahAngka(1,2,3,4,5)); 

console.log("==== ForIn ====");
const mhs2 = {
    nama : 'Cocoa',
    umur : 14,
    email : 'cocoa@gmail.com' 
}

for(const m in mhs2 ){
    console.log("forIn: " + m + " : " + mhs2[m]);
}