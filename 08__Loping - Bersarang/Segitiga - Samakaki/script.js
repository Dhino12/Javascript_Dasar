var s = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j > i; j--) {
        s += ' ';
    }
    for (var k = 1; k <= (2 * i - 1); k++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);