//===============================================
//innerHtml();
const judul = document.getElementById('judul');
judul.innerHTML = '<i>Best Loli 2020</i>';

//style.<properti>;
const juduls = document.querySelector('#judul');
juduls.style.backgroundColor = 'Blue';
juduls.style.color = 'white';

//element.setAttribute();
const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');

//element.classList.remove();
a.classList.remove('lebel');
//element.classList.add();
a.classList.add('gaya');
//element.classList.item();
console.log(a.classList.item(0));
//element.classList.contains();
console.log(a.classList.contains('gaya'));
//element.classList.replace();
a.classList.replace('gaya', 'label');