// Fungsi untuk membuka lightbox saat foto diklik
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src; // Set gambar di lightbox
    lightbox.style.display = 'flex'; // Tampilkan lightbox
}

// Fungsi untuk menutup lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Sembunyikan lightbox
}

// Kontrol musik latar dengan tombol play/pause
const playPauseBtn = document.getElementById('play-pause-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false; // Status musik

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause(); // Pause musik
        playPauseBtn.textContent = '🐰'; // Ikon kelinci normal
    } else {
        bgMusic.play(); // Play musik
        playPauseBtn.textContent = '⏸️'; // Ikon pause (bisa diganti dengan emoji lain jika perlu)
    }
    isPlaying = !isPlaying; // Toggle status
});

// Tutup lightbox jika klik di luar gambar
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});