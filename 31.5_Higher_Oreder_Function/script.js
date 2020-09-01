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