var mahasiswa = ['Latina', true, [2.90, 3.10, 3.25, 2.88]];

function IPKomulatif(IPSemester) {
    var total = 0;
    for (var i = 0; i < IPSemester.length; i++) {
        total += IPSemester[i];
    }
    return total / IPSemester.length;
}
console.log(IPKomulatif(mahasiswa[2]));