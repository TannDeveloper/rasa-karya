const cartCount = document.getElementById('cart-count');
const menuButton = document.querySelector('.menu');
const toast = document.getElementById('toast');
const addSelector = '.product button, .product-info button';
const forms = document.querySelectorAll('form');

function setFormMessage(form, message, type = 'success') {
  let messageElement = form.querySelector('.form-message');
  if (!messageElement) {
    messageElement = document.createElement('p');
    messageElement.className = 'form-message';
    form.append(messageElement);
  }
  messageElement.textContent = message;
  messageElement.dataset.state = type;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    setFormMessage(form, 'Periksa kembali kolom yang wajib diisi.', 'error');
    return;
  }
  form.reset();
  setFormMessage(form, 'Pengajuan sudah diterima. Tim Rasa Karya akan menghubungi Anda.', 'success');
}

forms.forEach((form) => form.addEventListener('submit', handleFormSubmit));
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') button.blur();
  });
});

let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');

  toastTimer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ===== Keranjang belanja =====
// Setiap isi keranjang: { nama: "Roti Abon", harga: 7000, jumlah: 1 }.
// Elemen pop up keranjang hanya ada di collection.html; di halaman lain
// bernilai null dan kode yang menyentuh pop up otomatis dilewati.
let daftarKeranjang = [];
const popupKeranjang = document.getElementById('popup-promo');
const kotakDaftar = document.getElementById('popup-daftar');
const teksStatusKeranjang = document.getElementById('popup-status');
const teksTotalHarga = document.getElementById('popup-total-harga');
const tombolKosongkan = document.getElementById('popup-kosongkan');
// Tombol "Pesan via WhatsApp" berbentuk link <a>, bukan tombol <button>.
const tombolPesan = document.getElementById('tombol-pesan');
// Nomor WhatsApp Rasa Karya (tanpa +62), dipakai untuk link wa.me.
const NOMOR_WA = '628233497811';

// 14000 menjadi "Rp 14.000" sesuai penulisan harga di halaman.
function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID');
}

// Harga di kartu tertulis seperti "Rp 7.000"; ubah jadi angka 7000.
function bacaHargaDariKartu(kartu) {
  const elemenHarga = kartu.querySelector('.collection-card__heading strong');
  if (!elemenHarga) return 0;
  return parseInt(elemenHarga.textContent.replace(/[^0-9]/g, ''), 10);
}

// Tambah barang: kalau sudah ada, cukup naikkan jumlahnya.
function tambahItem(nama, harga) {
  for (const item of daftarKeranjang) {
    if (item.nama === nama) {
      item.jumlah += 1;
      return;
    }
  }
  daftarKeranjang.push({ nama: nama, harga: harga, jumlah: 1 });
}

// Hapus satu baris barang dari keranjang.
function hapusItem(nama) {
  for (let i = 0; i < daftarKeranjang.length; i += 1) {
    if (daftarKeranjang[i].nama === nama) {
      daftarKeranjang.splice(i, 1);
      return;
    }
  }
}

// Kosongkan seluruh keranjang (tombol "Kosongkan Keranjang").
function kosongkanKeranjang() {
  daftarKeranjang.length = 0;
  perbaruiBadge();
  tampilkanPopupKeranjang();
}

// Jumlah semua barang, misal 2 roti abon + 1 roti sosis = 3.
function jumlahSemuaItem() {
  let jumlah = 0;
  daftarKeranjang.forEach((item) => {
    jumlah += item.jumlah;
  });
  return jumlah;
}

// Total harga semua barang, misal 14000 + 7000 = 21000.
function hitungTotal() {
  let total = 0;
  daftarKeranjang.forEach((item) => {
    total += item.harga * item.jumlah;
  });
  return total;
}

// Susun isi keranjang jadi pesan WhatsApp, misalnya:
//   Halo Rasa Karya, saya mau pesan:
//   - 2x Roti Abon (Rp 14.000)
//   - 1x Roti Sosis (Rp 8.000)
//   Total: Rp 22.000
function buatPesanWhatsApp() {
  let pesan = 'Halo Rasa Karya, saya mau pesan:' + '\n';
  daftarKeranjang.forEach((item) => {
    pesan +=
      '- ' + item.jumlah + 'x ' + item.nama +
      ' (' + formatRupiah(item.harga * item.jumlah) + ')' + '\n';
  });
  pesan += 'Total: ' + formatRupiah(hitungTotal());
  return pesan;
}

// Angka di tombol keranjang.
function perbaruiBadge() {
  if (cartCount) cartCount.textContent = jumlahSemuaItem();
}

// Gambar ulang isi pop up keranjang dari array daftarKeranjang.
function tampilkanPopupKeranjang() {
  if (!kotakDaftar) return; // halaman tanpa pop up keranjang

  // Kosongkan daftar dulu, lalu isi ulang.
  kotakDaftar.innerHTML = '';

  if (daftarKeranjang.length === 0) {
    teksStatusKeranjang.textContent = 'Keranjang kamu masih kosong.';
    tombolKosongkan.hidden = true;
    tombolPesan.hidden = true;
  } else {
    teksStatusKeranjang.textContent =
      jumlahSemuaItem() + ' produk di keranjangmu:';
    tombolKosongkan.hidden = false;
    // Siapkan link WhatsApp: isi pesan mengikuti keranjang saat itu.
    tombolPesan.hidden = false;
    tombolPesan.href =
      'https://wa.me/' + NOMOR_WA + '?text=' +
      encodeURIComponent(buatPesanWhatsApp());
  }

  daftarKeranjang.forEach((item) => {
    // Satu baris: "2 × Roti Abon | Rp 14.000 | tombol hapus".
    const baris = document.createElement('div');
    baris.className = 'popup-item';

    const nama = document.createElement('span');
    nama.className = 'popup-item__nama';
    nama.textContent = item.jumlah + ' \u00d7 ' + item.nama;

    const harga = document.createElement('span');
    harga.className = 'popup-item__harga';
    harga.textContent = formatRupiah(item.harga * item.jumlah);

    const hapus = document.createElement('button');
    hapus.type = 'button';
    hapus.className = 'popup-item__hapus';
    hapus.textContent = '\u00d7';
    hapus.setAttribute('aria-label', 'Hapus ' + item.nama + ' dari keranjang');
    hapus.dataset.nama = item.nama;

    baris.append(nama, harga, hapus);
    kotakDaftar.append(baris);
  });

  teksTotalHarga.textContent = formatRupiah(hitungTotal());
}

// Buka pop up keranjang dan pindahkan fokus ke tombol tutup supaya
// bisa ditutup dengan keyboard.
function bukaPopupKeranjang() {
  popupKeranjang.classList.add('active');
  document.body.classList.add('popup-open');

  // Ditunda sebentar: saat tombol produk diklik, overlay masih transisi dari
  // tersembunyi ke terlihat, dan elemen tersembunyi tidak bisa difokus.
  window.setTimeout(() => {
    const tutup = popupKeranjang.querySelector('[data-popup-close]');
    if (tutup) tutup.focus();
  }, 100);
}

function addToCart(button) {
  const { product } = button.dataset;

  // Harga dibaca dari kartu produk, misal "Rp 7.000" -> 7000.
  const card = button.closest('.product');
  const harga = card ? bacaHargaDariKartu(card) : 0;

  tambahItem(product, harga);
  perbaruiBadge();

  // Restart the CSS acknowledgement: remove the class, force a reflow, re-add.
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');

  if (card) {
    delete card.dataset.added;
    void card.offsetWidth;
    card.dataset.added = '';
    window.setTimeout(() => delete card.dataset.added, 500);
  }

  showToast(`Ditambahkan: ${product}`);

  // Kalau halaman ini punya pop up keranjang, langsung tampilkan isinya.
  if (popupKeranjang) {
    tampilkanPopupKeranjang();
    bukaPopupKeranjang();
  }
}

// Hapus barang lewat tombol × di dalam pop up. Dipakai delegasi seperti
// tombol produk, jadi tombol yang baru dibuat tetap berfungsi.
document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const tombolHapus = event.target.closest('.popup-item__hapus');
  if (tombolHapus) {
    hapusItem(tombolHapus.dataset.nama);
    perbaruiBadge();
    tampilkanPopupKeranjang();
  }
});

tombolKosongkan?.addEventListener('click', kosongkanKeranjang);

// Isi pop up pertama kali agar tidak kosong saat dibuka lewat ikon keranjang.
if (popupKeranjang && kotakDaftar) tampilkanPopupKeranjang();

// ===== Toggle menu (mobile) =====
// Hanya mengubah aria-expanded dan aria-label. Animasi hamburger -> X
// sepenuhnya dikerjakan CSS (.menu-icon), jadi tidak ada teks "Menu"/"Tutup".
function setMenu(open) {
  if (!menuButton) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}

function toggleMenu() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenu(!isOpen);
}

// Pastikan isi tombol selalu berupa ikon 3 garis, apa pun isi HTML-nya
// (menghapus teks "Menu" atau ikon Material Symbols lama kalau masih ada).
if (menuButton) {
  menuButton.innerHTML =
    '<span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>';
  setMenu(false);
}

function setActiveNavigation(event) {
  const selectedLink = event.currentTarget;

  document.querySelectorAll('nav a').forEach((link) => {
    link.removeAttribute('aria-current');
  });

  selectedLink.setAttribute('aria-current', 'page');

  // Tutup menu mobile setelah memilih tautan.
  setMenu(false);
}

// Delegasi: kartu produk yang dirender belakangan (mis. pagination koleksi)
// tetap mendapat perilaku tambah-ke-keranjang tanpa listener ulang.
document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest(addSelector);
  if (button) addToCart(button);
});
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', setActiveNavigation);
});
menuButton?.addEventListener('click', toggleMenu);

// Tutup menu dengan Escape, klik di luar header, atau saat layar dilebarkan ke desktop.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
document.addEventListener('click', (event) => {
  if (!menuButton || !(event.target instanceof Element)) return;
  if (!event.target.closest('.site-header')) setMenu(false);
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

// Nav home mengambang transparan di atas foto hero; setelah melewati hero,
// is-scrolled mengembalikan nav ke gold agar tetap kontras (R-25).
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const updateHeaderState = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}