for (var x = 1; x <= 10; x++) {
    if (x <= 6) {
        console.log('pengulangan IF ' + x + ' x');
    } else {
        console.log('pengulangan ELSE ' + x + ' x');
    }
}

// Pengulangan Khusus Array
let arr0 = ['Chino','Cocoa','Rize'];
arr0.forEach( e => console.log("forEach = " + e))