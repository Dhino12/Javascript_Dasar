var angka = prompt('masukan angka :');
alert('angka yang anda masukan = ' + angka);

if (angka % 2 === 0) {
    alert(angka + ' adalah Bilangan Genap');
} else {
    alert(angka + ' adalah Bilangan Ganjil');
}

alert('mulai Pengulangan');
for (var i = 0; i < 3; i++) {
    alert('Hello World ' + i + 'x');
}
alert('Selesai');