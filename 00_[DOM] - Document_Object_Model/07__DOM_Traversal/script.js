//=====================================================
//Event Handling
//=====================================================
// const tClose = document.querySelector('.close');
// const Card = document.querySelector('.card');

// tClose.addEventListener('click', function() {
//     Card.style.display = 'none';
// });
//=====================================================

//=====================================================
//DOM - Traversal
//=====================================================
const tTutup = document.querySelectorAll('.close');
// for (let i = 0; i < tTutup.length; i++) {
//     tTutup[i].addEventListener('click', function(e) {
//         // tTutup[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// };
//=====================================================
//====================== ATAU =========================
//=====================================================
tTutup.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});
//=====================================================
//============== Contoh parentElement =================
//=====================================================
const nama = document.querySelector('.nama');
console.log(`ParentElement = ${nama.parentElement}`);
console.log(nama.parentElement);
console.log(`nextSibling = ${nama.nextSibling}`);
console.log(nama.nextSibling);
console.log(`nextElementSibling = ${nama.nextElementSibling}`);
console.log(nama.nextElementSibling);
console.log(`previousElementSibling = ${nama.previousElementSibling}`);
console.log(nama.previousElementSibling);