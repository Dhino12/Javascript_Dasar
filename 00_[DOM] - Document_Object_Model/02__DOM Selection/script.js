//=======================================
//Memilih element ID =  getElementById() | Mengembalikan Element
//=======================================
const juduls = document.getElementById('judul');
juduls.style.backgroundColor = '#ccc';
juduls.style.color = '#fff';
//=======================================

//=======================================
//Mengambil dengn namaTag = getElementsByTagName() | Mengembalikan HTMLColection
//=======================================
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';
//=======================================


//=======================================
//Mencari yang memiliki nama Class = getElementsByClassName(); | Mengembalikan HTMLColection
//=======================================
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = '(ini diubah dari javascript)';
//=======================================


//=======================================
//Mencari Element Berdasarkan Selector
//querySelector(); | Mengembalikan 1 Element
//=======================================
const p4 = document.querySelector('#b p');
p4.style.color = 'red';
p4.style.fontWeight = 'Bold';
const li1 = document.querySelector('section#b ul li:nth-child(1)');
li1.style.backgroundColor = 'orange';
//=======================================


//=======================================
//Mencari Element Berdasarkan Selector
//querySelectorAll(); | Mengembalikan Semua Element NODELIST
//=======================================
const p5 = document.querySelectorAll('p');
p5[2].style.backgroundColor = 'lawngreen';
//=======================================

// const p6 = document.getElementsByTagName('p');
// p6[3].style.backgroundColor = 'black';

//=================== MENGUBAH NODE ROOTnya ==================
const sectionB = document.getElementById('b');
const p7 = sectionB.querySelector('p');
p7.style.backgroundColor = 'black';
//=================== ATAU ===================================
const sectionA = document.querySelector('section#a');
const p8 = sectionA.getElementsByTagName('p')[1];
p8.style.backgroundColor = 'purple';
p8.style.color = 'white';