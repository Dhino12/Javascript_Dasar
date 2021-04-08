## Functional Programming
Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming / FP ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.
contoh

```javascript
const names = ['Joko', 'Eko', 'Riko', 'Yoko'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Joko!', 'Eko!', 'Riko!', 'Yoko!' ]
*/
```
> dibanding menggunakan kode imperatif seperti diatas JS menyediakan gaya deklaratif 

```javascript
const names = ['Joko', 'Eko', 'Riko', 'Yoko'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);

/* output:
 * [ 'Joko!', 'Eko!', 'Riko!', 'Yoko!' ]
 */
```
lebih simple kita tidak perlu tahu menahu tentang berapa kali looping akan dijalankan, dan memasukan value berdasarkan posisi looping saat ini, cukup fokus dengan apa yang ingin didapatkan dari array yang bersangkutan