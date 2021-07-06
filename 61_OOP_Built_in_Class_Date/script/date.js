const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now()// today menghasilkan nilai miliseconds saat ini

    console.log("milisenconds tgl lahir = " + birtday);

    const diff_ms = today - birtday.getTime();  // menghitung selisih nilai miliseconds hari ini dan tanggal lahir

    console.log('Selisih hari ini dgn tgl lahir = ' + diff_ms);

    const diffDate = new Date(diff_ms)  
 
    return diffDate.getFullYear() - 1970 // 1970 adalah representasi 0 dari miliseconds
}

console.log(myAge('2001-01-26') + ' Tahun');