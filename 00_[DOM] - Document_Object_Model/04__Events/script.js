//=======================================================
//Event Handler (! Mengubah script HTML -nya juga);
//=======================================================
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p2.style.backgroundColor = 'crimson';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;
//=======================================================
/* ############################################################# */
//=======================================================
//addEventListener (! Tanpa Mengubah script HTML -nya);
//=======================================================
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     //Menambahkan Element
//     const liBaru = document.createElement('li');
//     const textliBaru = document.createTextNode('ItemBaru');
//     liBaru.appendChild(textliBaru);
//     const ul = document.querySelector('section#b ul');
//     ul.appendChild(liBaru);
// });
//=======================================================
/* ############################################################# */
//=======================================================
//Jika Menggunaan Event Handler akan menimpa events Sebelumnya
//=======================================================
const p5 = document.querySelector('.p3');
// p5.onclick = function() {
//     p5.style.backgroundColor = 'crimson';
// }
// p5.onclick = function() {
//     p5.style.color = 'crimson';
// };
//=======================================================
/* ############################################################# */
//=======================================================
//Jika Menggunaan addEventListener akan MENJALANKAN KEDUANYA tanpa menimpa 
//=======================================================
p5.addEventListener('mouseenter', function() {
    p5.style.backgroundColor = 'crimson';
});
p5.addEventListener('mouseleave', function() {
    p5.style.color = 'white';
    p5.style.fontWeight = 'bold';
});
//=======================================================