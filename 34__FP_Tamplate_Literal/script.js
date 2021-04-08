// =====================
// 1. HTML Fragments
// =====================
const mhs = {
    nama: 'Chino Kafuu',
    umur: 10,
    nim: 20202010,
    email: 'chino@yahoo.co.id'
};

const el = `
    <div class = "mhs">
        <h2>${mhs.nama}</h2>
        <span>${mhs.nim}</span>
    </div>
`
document.body.innerHTML = el;

// =====================
// 2. Loop
// =====================
// const mhs2 = [{
//         nama: 'Chino Kafuu',
//         email: 'chino@yahoo.co.id'
//     },
//     {
//         nama: 'Cocoa Hoto',
//         email: 'cocoa@yahoo.co.id'
//     }
// ]
// const em = `
//     <div class = "mhs2">
//         ${mhs2.map(m => `
//             <ul>
//                 <li>${m.nama}</li>
//                 <li>${m.email}</li>
//             </ul>
//         `).join('')}
//     </div>
// `;
// document.body.innerHTML = em;

// =====================
// 3. Coditional 
// =====================
//ternary 
const lagu = {
    judul: `Tetap Dalam Jiwa`,
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
}

const lag = `
<div class = "lagu">
<ul> 
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : '' }</li> 
</ul>
</div>
`
document.body.innerHTML = lag;