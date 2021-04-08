
/* 
Higher-Order Function menjadi bagian konsep pada paradigma FP. 
Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; 
mengembalikan sebuah fungsi; 
atau bahkan keduanya.
*/

function repeat(n, action){
    for(let i = 0 ; i < n ; i++){
        action(i)
    }
}

repeat(10,console.log);
repeat(2,alert);


console.log('=================  ');

function kerjakanTugas(mataKuliah, selesai){
    console.log(`Mulai Mengerjakan Tugas ${mataKuliah}`);
    selesai();
}

function selesai(){
    alert('Selesai Mengerjakan Tugas')
    console.log("Selesai Mengerjakan Tugas");
}

kerjakanTugas('Bhs Inggris',selesai)

console.log('=================  ');
const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}
sayHello()();

console.log('=================  ');
const names = ['Joko', 'Eko', 'Riko', 'Yoko'];

const arrayMap = (array, fn) => {
    const newArray = [];
    
    for(let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    
    return newArray;
}

const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});