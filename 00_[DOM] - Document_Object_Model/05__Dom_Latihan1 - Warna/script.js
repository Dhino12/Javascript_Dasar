//================================================================================
//====================== Tombol Ubah Warna sesuai Class HTML =====================
//================================================================================
const tUbahWarna = document.getElementById('tombolUbah');
// const body = document.getElementsByTagName('body')[0];
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'Crimson';
    // document.body.setAttribute('class', 'biruMuda');
    document.body.classList.toggle('biruMuda');
};
//================================================================================
//======================== Tombol Acak Warna =====================================
//================================================================================
const Trandom = document.createElement('button');
const textT = document.createTextNode('Acak Warna');
Trandom.appendChild(textT);
Trandom.setAttribute('type', 'Button');

tUbahWarna.after(Trandom);
Trandom.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    rgb(1, 1, 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
//================================================================================
//======================== Tombol digeser ========================================
//================================================================================
const sMerah = document.querySelector('input[name = sMerah]');
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sHijau = document.querySelector('input[name = sHijau]');
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
const sBiru = document.querySelector('input[name = sBiru]');
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
//===============================================================================
//============================ Mousemove ========================================
//===============================================================================
document.body.addEventListener('mousemove', function(event) {
    //Posisi Mouse
    // events.clientX;
    // events.clientY;
    //ukuran browser;
    // console.log(window.innerWidth);
    const Xpos = Math.round((event.clientX / window.innerWidth) * 255);
    const Ypos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + Xpos + ',' + Ypos + ',100)';
});