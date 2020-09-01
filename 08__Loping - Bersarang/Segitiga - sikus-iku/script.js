var s = '';
console.log('Pola 1');
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);