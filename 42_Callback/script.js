// ================ Callback =======================
// ----- Synchronous Callback -------
console.log("======= Synchronous Callback ======= ");
// function hallo(nama){
//     alert(`Hallo ${nama}`)
// }

function tampilkanPesan(Callback) {
    const nama = prompt('Masukan Nama: ');
    Callback(nama)
}

// tampilkanPesan(hallo)
tampilkanPesan((nama) => alert(`Hallo ${nama}`))

const mhs = [{
        "nama": "Chino",
        "nim": "010101010",
        "email": "chino@gmail.com",
        "jurusan": "TI",
        "idDosen": 1010
    },
    {
        "nama": "Maya",
        "nim": "1010101010",
        "email": "maya@gmail.com",
        "jurusan": "SI",
        "idDosen": 0101
    },
    {
        "nama": "Megu",
        "nim": "1100110011",
        "email": "megu@gmail.com",
        "jurusan": "IT",
        "idDosen": 0011
    }
];

console.log("Mulai");
mhs.forEach(m => {
    for (let i = 0; i < 1000000; i++) {
        let date = new Date
    }
    console.log(m.nama)
})
console.log("Selesai");

console.log("======= Asynchronous Callback ======= ");

function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // 4 = Ready
            if (xhr.status === 200) {
                // 200 = Ok 
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

// ! Gunakan Live Server Extension VScode ! 

console.log("Mulai");
getDataMahasiswa('dataMahasiswa.json',
    results => {
        const mhs2 = JSON.parse(results);
        mhs2.forEach(a => console.log(a.nama))
    },
    () => {}
)
console.log("Selesai");

console.log();

console.log("--- Menggunakan Jquery ---");

console.log("Mulai");

$.ajax({
    url: 'dataMahasiswa.json',
    success: (mhs3) => {
        console.log(mhs3)
        mhs3.forEach(m => console.log(`Nama : ${m.nama}`))
    },
    error: (e) => {
        console.error(e.responseText);
    }
})

console.log("Selesai");