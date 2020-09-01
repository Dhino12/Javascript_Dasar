var s = '';
console.log('Pola 2');
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        s += '*';
    }
    s += '\n';
}
console.log(s);