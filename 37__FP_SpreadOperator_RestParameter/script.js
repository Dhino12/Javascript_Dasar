// SpreadOperator

// Memecah Iterebles menjadi single element

console.log("====== Spread Operator ======");
const team1 = ['Chino', 'Maya', 'Megu'];
console.log(...team1);
console.log(...team1[0]);

console.log("------ Menggabungkan 2 Array ------");
const team2 = ['Rize', 'Chiya', 'Syaro'];
// const people = [...team1, ...team2]
const people = [...team1, 'cocoa', ...team2]
const people2 = team1.concat(team2)
console.log("SpreadOperator: " + people);
console.log("concat: " + people2);

console.log("------ copy Array ------");
const siswa1 = [...team2];
siswa1[0] = 'cocoa'
console.log(siswa1);

const liMHS = document.querySelectorAll('li');
const mhs = [...liMHS].map(m => m.textContent);
console.log(mhs);



const nama = document.querySelector('.caffe')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);

nama.innerHTML = huruf