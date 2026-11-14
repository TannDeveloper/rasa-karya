/*
  Rasa Karya - koleksi roti.

  Data masih dummy: 48 produk yang memakai 6 nama roti yang sudah ada
  (diulang 8x) dan satu foto yang sama. Ganti isi TEMPLATES / products
  dengan data asli kalau sudah siap.

  Tampilan: 6 produk per halaman. Tombol "sebelumnya"/"berikutnya" dan
  nomor halaman di bawah grid memindahkan halaman tanpa reload.
*/
(function () {
  'use strict';

  var PER_PAGE = 6;
  var DUMMY_COUNT = 48;
  var IMAGE = '../assets/images/hero-roti.png';
  var IMAGE_ALT = 'Aneka roti segar';

  var TEMPLATES = [
    {
      name: 'Roti Boy',
      price: 'Rp 5.000',
      energy: '♧ 250 kkal/piece',
      description:
        'Roti bertekstur lembut dengan aroma kopi yang khas dan lapisan luar yang renyah, cocok untuk menemani waktu santai.'
    },
    {
      name: 'Roti Pisang Cokelat',
      price: 'Rp 5.000',
      energy: '♧ 200 kkal/piece',
      description:
        'Perpaduan pisang manis dan cokelat yang lezat dalam balutan roti lembut, menciptakan rasa nikmat di setiap gigitan.'
    },
    {
      name: 'Roti Abon',
      price: 'Rp 5.000',
      energy: '♧ 270 kkal/piece',
      description:
        'Roti lembut dengan taburan abon gurih yang kaya rasa, pilihan tepat bagi kamu yang menyukai camilan bercita rasa savory.'
    },
    {
      name: 'Roti Abon Gulung',
      price: 'Rp 5.000',
      energy: '♧ 270 kkal/piece',
      description:
        'Roti gulung lembut dengan isian abon yang gurih, menghadirkan perpaduan tekstur dan rasa yang pas untuk camilan sehari-hari.'
    },
    {
      name: 'Roti Isi Daging',
      price: 'Rp 5.000',
      energy: '♧ 250 kkal/piece',
      description:
        'Roti lembut dengan isian daging yang gurih dan kaya rasa, cocok untuk mengganjal lapar di sela-sela aktivitas.'
    },
    {
      name: 'Roti Kacang',
      price: 'Rp 5.000',
      energy: '♧ 280 kkal/piece',
      description:
        'Roti lembut dengan topping kacang tanah yang renyah, memberikan perpaduan rasa gurih dan aroma kacang yang menggugah selera.'
    }
  ];

  var grid = document.getElementById('collection-grid');
  var pagination = document.getElementById('pagination');
  var status = document.getElementById('collection-status');
  if (!grid || !pagination) return;

  var products = [];
  for (var index = 0; index < DUMMY_COUNT; index += 1) {
    products.push(TEMPLATES[index % TEMPLATES.length]);
  }

  var totalPages = Math.max(1, Math.ceil(products.length / PER_PAGE));
  var currentPage = 1;

  function buildCard(product) {
    var card = document.createElement('article');
    card.className = 'collection-card product';

    var image = document.createElement('img');
    image.className = 'collection-card__image';
    image.src = IMAGE;
    image.alt = IMAGE_ALT;
    image.loading = 'lazy';
    image.decoding = 'async';

    var content = document.createElement('div');
    content.className = 'collection-card__content';

    var heading = document.createElement('div');
    heading.className = 'collection-card__heading';

    var title = document.createElement('h3');
    title.textContent = product.name;

    var price = document.createElement('strong');
    price.textContent = product.price;

    var energy = document.createElement('small');
    energy.textContent = product.energy;

    var description = document.createElement('p');
    description.textContent = product.description;

    var button = document.createElement('button');
    button.type = 'button';
    button.dataset.product = product.name;
    button.textContent = 'Tambah ke Keranjang';

    heading.append(title, price);
    content.append(heading, energy, description, button);
    card.append(image, content);
    return card;
  }

  // 1 2 3 4 ... 8 - jendela 3 nomor di sekitar halaman aktif.
  function pageSlots() {
    var slots = [];
    var number;
    if (totalPages <= 7) {
      for (number = 1; number <= totalPages; number += 1) slots.push(number);
      return slots;
    }
    var start = Math.min(Math.max(currentPage - 1, 2), totalPages - 3);
    var end = Math.min(start + 2, totalPages - 1);
    slots.push(1);
    if (start > 2) slots.push('gap');
    for (number = start; number <= end; number += 1) slots.push(number);
    if (end < totalPages - 1) slots.push('gap');
    slots.push(totalPages);
    return slots;
  }

  function makeControl(label, options) {
    var control = document.createElement('button');
    control.type = 'button';
    control.textContent = label;
    if (options.page) control.dataset.page = String(options.page);
    if (options.ariaLabel) control.setAttribute('aria-label', options.ariaLabel);
    if (options.current) control.setAttribute('aria-current', 'page');
    if (options.disabled) control.disabled = true;
    return control;
  }

  function renderPagination() {
    pagination.textContent = '';

    pagination.append(
      makeControl('\u2039', {
        page: currentPage - 1,
        ariaLabel: 'Halaman sebelumnya',
        disabled: currentPage === 1
      })
    );

    pageSlots().forEach(function (slot) {
      if (slot === 'gap') {
        var gap = document.createElement('span');
        gap.textContent = '...';
        gap.setAttribute('aria-hidden', 'true');
        pagination.append(gap);
        return;
      }
      pagination.append(
        makeControl(String(slot), {
          page: slot,
          ariaLabel: 'Halaman ' + slot,
          current: slot === currentPage
        })
      );
    });

    pagination.append(
      makeControl('\u203a', {
        page: currentPage + 1,
        ariaLabel: 'Halaman berikutnya',
        disabled: currentPage === totalPages
      })
    );
  }

  function renderStatus(firstIndex) {
    if (!status) return;
    if (!products.length) {
      status.textContent = 'Belum ada produk pada koleksi ini.';
      return;
    }
    var lastIndex = Math.min(firstIndex + PER_PAGE, products.length);
    status.textContent =
      'Menampilkan ' + (firstIndex + 1) + '\u2013' + lastIndex + ' dari ' + products.length + ' produk';
  }

  function renderPage(page) {
    currentPage = Math.min(Math.max(page, 1), totalPages);

    var firstIndex = (currentPage - 1) * PER_PAGE;
    var slice = products.slice(firstIndex, firstIndex + PER_PAGE);

    grid.textContent = '';
    slice.forEach(function (product) {
      grid.append(buildCard(product));
    });

    grid.classList.remove('collection-grid--enter');
    void grid.offsetWidth;
    grid.classList.add('collection-grid--enter');

    renderPagination();
    renderStatus(firstIndex);
  }

  function scrollToGrid() {
    var offset = grid.getBoundingClientRect().top + window.pageYOffset - 96;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(offset, 0), behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  pagination.addEventListener('click', function (event) {
    var control = event.target.closest('button[data-page]');
    if (!control || control.disabled) return;
    var target = Number(control.dataset.page);
    if (!Number.isFinite(target) || target === currentPage) return;

    renderPage(target);

    var active = pagination.querySelector('button[aria-current="page"]');
    if (active) active.focus({ preventScroll: true });
    scrollToGrid();
  });

  renderPage(1);
})();
