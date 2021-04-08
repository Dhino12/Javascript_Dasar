const CACHE_KEY = "calculation_history";

function checkForStorage(){
    // fungsi checkForStorage() dengan mengembalikan nilai boolean dari pengecekan fitur Storage pada browser.
    return typeof(Storage) !== "undefined";
}

function putHistory(data){
    if(checkForStorage()){
        let historyData = null;
        if(localStorage.getItem(CACHE_KEY) === null){
            historyData = [];
        }else{
            // Yang pertama fungsi JSON.parse() yang mana
                //  digunakan untuk mengubah nilai objek dalam bentuk string kembali pada bentuk objek JavaScript.
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }
        // fungsi unshift(), fungsi ini digunakan untuk 
            // menambahkan nilai baru pada array yang ditempatkan pada awal index
        historyData.unshift(data);

        if(historyData.length > 5){
            // Fungsi pop() di atas merupakan fungsi untuk menghapus 
                // nilai index terakhir pada array, sehingga ukuran array historyData tidak akan pernah lebih dari 5.

            // Hal ini kita terapkan agar riwayat kalkulasi yang muncul adalah lima hasil kalkulasi terakhir oleh pengguna.
            historyData.pop();
        }

        // Kemudian JSON.stringify() digunakan untuk mengubah objek JavaScript ke dalam bentuk String
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

// Seperti yang kita tahu, bahwa localStorage hanya dapat menyimpan data primitif seperti string, 
    // sehingga kita perlu mengubah objek ke dalam bentuk string jika ingin menyimpan ke dalam localStorage.

function showHistory(){
    if(checkForStorage){
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    }else{
        return [];
    }
    // Fungsi ini mengembalikan nilai array dari localStorage jika sudah memiliki nilai sebelumnya melalui JSON.parse().
        //  Namun jika localStorage masih kosong, fungsi ini akan mengembalikan nilai array kosong.
}

function renderHistory(){
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");

    // selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
    historyList.innerHTML = "";

    for(let history of historyData){
        let row = document.createElement("tr");
        // ini harus sama dengan yang ada di script.js performCalculation() object history
        row.innerHTML = "<td>" + history.firstNumbers + "</td>";
        row.innerHTML += "<td>" + history.operators + "</td>";
        row.innerHTML += "<td>" + history.secondNumbers + "</td>";
        row.innerHTML += "<td>" + history.resultWeb + "</td>";

        historyList.appendChild(row);
    }
}
renderHistory();