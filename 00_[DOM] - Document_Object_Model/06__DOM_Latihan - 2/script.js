function getPilihanComp() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'Seri';
    if (player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
    if (player == 'orang') return (comp == 'Gajah') ? 'Kalah' : 'Menang';
    if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang';
}

function Putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        };
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(i) {
    i.addEventListener('click', function() {
        const pilihanComputer = getPilihanComp();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        Putar();
        setTimeout(function() {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    })
});