//node.createElement()  
const pBaru = document.createElement('p');
//node.createTextNode();
const pText = document.createTextNode('Paragraf Baru');

//node.appendChild();
pBaru.appendChild(pText);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//node.inserBefore();
const liBaru = document.createElement('li');
const liText = document.createTextNode('List Baru');
liBaru.appendChild(liText);
const ul = document.querySelector('section#b ul');
const liLama = ul.getElementsByTagName('li')[1];
ul.insertBefore(liBaru, liLama);

//parrent.removeChild();
const link = document.querySelector('section#a a');
sectionA.removeChild(link);

//parrent.replacenode();
const paBaru = document.createElement('p');
const paText = document.createTextNode('Best Loli');
paBaru.appendChild(paText);
const sectionB = document.querySelector('section#b ');
const pLama = document.getElementsByTagName('p')[4];
sectionB.replaceChild(paBaru, pLama);


// Yang Element Baru Diberi Warna crimson =============
pBaru.style.backgroundColor = 'crimson';
liBaru.style.backgroundColor = 'crimson';
paBaru.style.backgroundColor = 'crimson';