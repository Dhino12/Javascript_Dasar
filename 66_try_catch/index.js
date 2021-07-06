try {
    
    // kode yang sekiranya akan error
    console.log("Awal block try");

    error_code // menciptakan error

    // ktika trjadi error diatas, block dbawah tdk dieksekusi
    console.log("Akhir block try");

} catch (error) {

    // error handling
    console.log("Terjadi error name: " + error.name);
    console.log("Terjadi error message: " + error.message);
    console.error("Terjadi error stack :" + error.stack);

} finally{

    console.log("Apapun keadaan block ini akan selalu dieksekusi");

}