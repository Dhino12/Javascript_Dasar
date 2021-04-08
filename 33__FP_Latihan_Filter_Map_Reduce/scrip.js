// Ambil Semua Elment Video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang JAVASCRIPT LANJUTAN
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing masing video
    .map(item => item.dataset.duration)

    // Ubah durasi dari String menjadi Float ,
    //Ubah Durasi Menjadi Detik
    .map(waktu => {
        // 10:30 = [10,30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1]
    })

    // Jumlahkan Semua Detik
    .reduce((total, detik) => total + detik);

// Ubah Format | jam : menit : detik
// -- Math.floor = pembulatan kebawah
// -- Math.seil = pembulatan keatas
// -- Math.round = pembulatan kePalingdekat
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Kita Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam ,${menit} Menit ,${detik} Detik.`;

const jmlhVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlhVideo = document.querySelector('.jumlah-video');
pJmlhVideo.textContent = `${jmlhVideo} Video`

console.log(jsLanjut);