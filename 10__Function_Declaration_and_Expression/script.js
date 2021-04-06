//Function Decleration
function volkub(a, b) {
    var total, volum_A, volum_B;
    volum_A = a * a * a;
    volum_B = b * b * b;
    total = volum_A + volum_B;

    return total;
}
alert(volkub(8, 10));

//Fuction Expression / annonymouse function
var pesan = function(nama) {
    alert('Hallo ' + nama);
}
pesan('sapi');