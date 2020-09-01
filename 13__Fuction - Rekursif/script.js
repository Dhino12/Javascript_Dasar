function angka(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    return angka(n - 1);
}
angka(10);
/* 
Fibonacci = deret bilangan dimana sebuah angka adalah
jumlah dari dua angka sebelumnya.
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
fibonacciTotal akan menampung jumlah bilangan fibonacci.
*/
//Fibonacci
function fibNaive(n) {
    if (n <= 1) {
        return n;
    }
    console.log('Fib: ' + n);
    return fibNaive(n - 1) + fibNaive(n - 2);
}
/*
fib(4)
fib(3)          + fib(2)
fib(2) + fib(1) + fib(2)
1 + 1 + 1;
*/
console.log('Fibonacci: ' + fibNaive(4))
    // Deret Fibonacci adalah 1, 1, 2, 3, 5, 8, 13, 21
    // Hasil Fibonacci adalah 21.

// Beda Angka

function bedaAngka(angka, selisih) {
    if (angka <= selisih) {
        return angka;
    }
    return angka * bedaAngka(angka - selisih, selisih);
}

/*
bedaAngka(12,5)
12 * bedaAngka(7,5)
12 * 7 * bedaAngka(2,5)
12 * 7 * 2 * bedaAngka(-3, 5)
12 * 7 * 2 * 1
168
*/

console.log('Beda Angka: ' + bedaAngka(12, 5)); // 12 * 7 * 2 = 168