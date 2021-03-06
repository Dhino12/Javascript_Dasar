//==================================================================
//element.style.innerHTML
//==================================================================
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em> Best Loli 2020 </em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';
//##################################################################

//==================================================================
//element.syle<propertiCSS>
//==================================================================
const judul2 = document.querySelector('#judul');
judul2.style.color = 'black';
judul2.style.backgroundColor = 'yellow';
//##################################################################

//==================================================================
//element.setAttribute();
//==================================================================
const judul = document.getElementsByTagName('h1')[0];
const a = document.querySelector('section#a a');
a.setAttribute('id', 'linkinsta'); //Menambahkan Attribute baru
//==================================================================
// a.removeAttribute('href');           //Menghapus Attribute baru
// judul.setAttribute('name ', 'Latina');
//##################################################################

//==================================================================
//element.classList.method();
//==================================================================
const p2 = document.querySelector('.p2');
//##################################################################

//==================================================================
//element.classList.add()       == Menambah Class Baru
//==================================================================
p2.classList.add('label');
//##################################################################

//==================================================================
//element.classList.remove()    == Menghapus Class Baru
//==================================================================
p2.classList.remove('label');
//##################################################################

//==================================================================
//element.classList.toggle()    == Menambahkan Class Baru jika tidak ada / jika ada akan menghilangkan
//==================================================================
p2.classList.toggle('label');
//##################################################################

//==================================================================
//element.classList.item()      == Mengatahui Class tertentu
//==================================================================
console.log(p2.classList.item(1));
//##################################################################

//==================================================================
//element.classList.contains()  == Check punya Class tertentu / tidak
//==================================================================
console.log(p2.classList.contains('p2'));
//##################################################################

//==================================================================
//element.classList.replace()  == Mengganti Class Yang ada dengan Class yang baru
//==================================================================
console.log(p2.classList.replace('label', 'replace'));
//##################################################################