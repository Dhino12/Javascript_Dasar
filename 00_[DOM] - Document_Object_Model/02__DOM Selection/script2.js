//Memilih Element ID = getElementById();
const juduls = document.getElementById('judul');
juduls.style.backgroundColor = 'purple';
juduls.style.color = 'white';

//Memilih Element berdasarkan TagNama = getElementByTagName();
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'black';
    p[i].style.color = 'lightblue';
}

//Memilih Element Berdasarkan Class Name = getElementByClassName
const cPa = document.getElementsByClassName('p1')[0];
cPa.style.color = 'aqua';

//Mencari Element Berdasarkan Selector = querySelector();
const sectionB = document.getElementById('b');
const li = sectionB.querySelector('section#b ul li');
li.style.backgroundColor = 'lightgreen';

//Mencari Element Berdasarkan Semua Selector = querySelectorAll();
const pB = sectionB.querySelectorAll('p');
for (let i = 0; i < pB.length; i++) {
    pB[i].style.color = 'red';
    pB[i].style.backgroundColor = 'lightblue';
    pB[i].style.fontWeight = 'bold';
}