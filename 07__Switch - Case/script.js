var item = prompt('Masukan Nama Makanan / Minuman :\n (Contoh : Nasi ,Daging ,Susu ,Cola)');

// switch (item) {
//     case 'Nasi':
//         alert('Makanan Sehat');
//         break;
//     case 'Daging':
//         alert('Makanan Sehat');
//         break;
//     case 'Susu':
//         alert('Minuman Sehat');
//         break;
//     case 'Cola':
//         alert('Minuman Tidak Sehat');
//         break;
//     default:
//         alert('Inputan Tidak Valid');
//         break;
// }
//Sama Saja
switch (item) {
    case 'Nasi':
    case 'Daging':
        alert('Makanan Sehat');
        break;
    case 'Susu':
        alert('Minuman Sehat');
        break;
    case 'Cola':
        alert('Minuman Tidak Sehat');
        break;
    default:
        alert('Inputan Tidak Valid');
        break;
}