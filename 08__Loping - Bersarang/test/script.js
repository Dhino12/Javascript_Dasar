var s = '';
for (var i = 1; i <= 5; i++) {
    for (var k = 1; k <= 5; k++) {
        if (k == 1 || k == 3) {
            s += ' ';
        }
        s += '#';
    }
    for (var j = 1; j <= 5; j++) {
        if (j == 2 || j == 4) {
            s += '#';
        }
        s += ' ';
    }
    s += '\n';
}
console.log(s);