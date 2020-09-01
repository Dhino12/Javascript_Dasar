const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

//menghapus class .aktif setiap berpindah tempat
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    //Check Apakah yang diklik thumbs
    if (e.target.className == 'thumb') {
        //Mengganti gambar pada class .jumbo
        jumbo.src = e.target.src;
        //Menambahkan fade 
        jumbo.classList.add('fade');
        //Menghapus fade setiap 500ms
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);
        //menghapus class .aktif setiap berpindah tempat
        thumbs.forEach(function(thumb) {
            // if (thumb.classList.contains('aktif')) {
            //     thumb.classList.remove('aktif');
            // }
            thumb.className = 'thumb';
        })

        e.target.classList.add('aktif');
    }
});