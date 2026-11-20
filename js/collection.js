/*
  Menampilkan produk di collection.html: filter kategori + 6 produk per halaman.

  Alur kerjanya cuma tiga langkah:
  1. Pilih daftar kartu yang cocok dengan kategori aktif.
  2. Ambil 6 kartu milik halaman aktif, sisanya disembunyikan.
  3. Gambar ulang tombol nomor halaman.

  Mau ubah jumlah produk per halaman? Ubah angka PER_HALAMAN di bawah.
*/

const PER_HALAMAN = 6;

// Elemen yang dipakai berulang kali, diambil sekali di awal.
const semuaKartu = document.querySelectorAll('#collection-grid .collection-card');
const tombolFilter = document.querySelectorAll('.filter-nav button');
const kotakHalaman = document.getElementById('pagination');
const teksStatus = document.getElementById('collection-status');

// Keadaan halaman saat ini.
let kategoriAktif = 'semua';
let halamanAktif = 1;

// Kartu yang boleh tampil pada kategori aktif.
function kartuSesuaiKategori() {
  const hasil = [];
  semuaKartu.forEach((kartu) => {
    const cocok = kategoriAktif === 'semua' || kartu.dataset.kategori === kategoriAktif;
    if (cocok) hasil.push(kartu);
  });
  return hasil;
}

// Sembunyikan semua kartu, lalu tampilkan hanya 6 kartu milik halaman aktif.
function tampilkanKartu() {
  const daftar = kartuSesuaiKategori();
  const totalHalaman = Math.ceil(daftar.length / PER_HALAMAN);

  // Jaga-jaga: kalau halaman aktif melebihi jumlah halaman, turunkan.
  if (halamanAktif > totalHalaman) halamanAktif = totalHalaman;
  if (halamanAktif < 1) halamanAktif = 1;

  const mulai = (halamanAktif - 1) * PER_HALAMAN;
  const batas = mulai + PER_HALAMAN;

  // Satu perulangan untuk semua kartu:
  // - kartu kategori lain tidak ada di "daftar", jadi urutannya -1 -> disembunyikan
  // - kartu di luar 6 urutan halaman aktif juga disembunyikan
  semuaKartu.forEach((kartu) => {
    const urutan = daftar.indexOf(kartu);
    const tampil = urutan >= mulai && urutan < batas;
    kartu.classList.toggle('is-hidden', !tampil);
  });

  return daftar.length;
}

// Buat tombol ‹ 1 2 3 … › sesuai jumlah halaman.
function tampilkanTombolHalaman(totalProduk) {
  const totalHalaman = Math.max(1, Math.ceil(totalProduk / PER_HALAMAN));
  kotakHalaman.innerHTML = '';

  // Tombol "sebelumnya".
  const sebelumnya = document.createElement('button');
  sebelumnya.type = 'button';
  sebelumnya.textContent = '\u2039';
  sebelumnya.setAttribute('aria-label', 'Halaman sebelumnya');
  sebelumnya.disabled = halamanAktif === 1;
  sebelumnya.addEventListener('click', () => pindahHalaman(halamanAktif - 1));
  kotakHalaman.append(sebelumnya);

  // Tombol nomor halaman.
  for (let nomor = 1; nomor <= totalHalaman; nomor += 1) {
    const tombol = document.createElement('button');
    tombol.type = 'button';
    tombol.textContent = nomor;
    tombol.setAttribute('aria-label', 'Halaman ' + nomor);

    if (nomor === halamanAktif) {
      tombol.classList.add('is-active');
      tombol.setAttribute('aria-current', 'page');
    } else {
      tombol.addEventListener('click', () => pindahHalaman(nomor));
    }

    kotakHalaman.append(tombol);
  }

  // Tombol "berikutnya".
  const berikutnya = document.createElement('button');
  berikutnya.type = 'button';
  berikutnya.textContent = '\u203a';
  berikutnya.setAttribute('aria-label', 'Halaman berikutnya');
  berikutnya.disabled = halamanAktif === totalHalaman;
  berikutnya.addEventListener('click', () => pindahHalaman(halamanAktif + 1));
  kotakHalaman.append(berikutnya);
}

// Tulis keterangan kecil di atas grid, misal "Menampilkan 1–6 dari 48 produk".
function tampilkanStatus(totalProduk) {
  if (totalProduk === 0) {
    teksStatus.textContent = 'Belum ada produk pada kategori ini.';
    return;
  }

  const mulai = (halamanAktif - 1) * PER_HALAMAN + 1;
  const selesai = Math.min(halamanAktif * PER_HALAMAN, totalProduk);
  teksStatus.textContent =
    'Menampilkan ' + mulai + '\u2013' + selesai + ' dari ' + totalProduk + ' produk';
}

// Gambar ulang seluruh bagian daftar produk.
function perbaruiTampilan() {
  const totalProduk = tampilkanKartu();
  tampilkanTombolHalaman(totalProduk);
  tampilkanStatus(totalProduk);

  // Tandai tombol filter yang sedang dipakai.
  tombolFilter.forEach((tombol) => {
    tombol.classList.toggle('is-active', tombol.dataset.kategori === kategoriAktif);
  });
}

function pindahHalaman(nomor) {
  halamanAktif = nomor;
  perbaruiTampilan();
  kotakHalaman.scrollIntoView({ block: 'nearest' });
}

// Klik tombol filter: mulai lagi dari halaman 1.
tombolFilter.forEach((tombol) => {
  tombol.addEventListener('click', () => {
    kategoriAktif = tombol.dataset.kategori;
    halamanAktif = 1;
    perbaruiTampilan();
  });
});

// Tampilan awal.
perbaruiTampilan();
