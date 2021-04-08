// Tagged Template Literal

const nama = 'Chino Kafuu';
const umur = 10;
const email = 'chino@yahoo.co.jp';

// function coba(strings, ...value){
//     return value
// }

// function coba(strings, ...value){
//     let result = '';

//     strings.forEach((str,index) => {
//         result += `${str} ${value[index] || ''}`
//     });

//     return result
// }

function coba(strings, ...value){
    return strings.reduce((result,str,i) => `${result} ${str} ${value[i] || ''}`, '')
}

function highlight(strings, ...value){
    return strings.reduce((result,str,i) => `${result} ${str} 
    <span class="hl">
        ${value[i] || ''}
    </span>`, '')
}

const str = coba`Hallo Nama ${nama}, umur ${umur}`
console.log(str);

const hL = highlight`Hallo Nama ${nama}, umur ${umur} email ${email}`
document.body.innerHTML = hL
