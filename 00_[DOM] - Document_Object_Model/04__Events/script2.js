//Event Handler
const p1 = document.querySelector('section#a p');

let p4 = function() {
    p1.style.backgroundColor = 'red';
}
p1.onclick = p4;

//element.addEventListener();
const tambah = document.querySelector('section#a .p3');
let i = 0
tambah.addEventListener('click', function() {
    const liBaru = document.createElement('li');
    const liText = document.createTextNode((++i) + '. List Baru');
    liBaru.appendChild(liText);
    const ul = document.querySelector('section#b ul');
    const liLama = ul.querySelector('li:nth-child(2)');
    ul.insertBefore(liBaru, liLama);
    // ul.appendChild(liBaru);
})