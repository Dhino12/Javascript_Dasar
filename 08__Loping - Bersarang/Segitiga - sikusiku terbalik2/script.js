var s = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j < i; j++) {
        s += ' ';
    }
    for (var k = 5; k >= i; k--) {
        s += '*';
    }
    s += '\n';
}
console.log(s);