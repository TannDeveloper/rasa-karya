/* Rasa Karya — koleksi 48 produk dengan foto lokal hasil optimasi WebP. */
(function () {
  'use strict';

  var PER_PAGE = 6;
  var FILTERS = ['roti', 'hangat', 'dingin'];
  var IMAGE_PATH = '../assets/images/products/';
  var bread = 'Roti lembut yang disiapkan segar untuk menemani aktivitas harian.';
  var warm = 'Minuman hangat dengan rasa yang pas untuk menemani roti pilihanmu.';
  var cold = 'Minuman dingin yang menyegarkan untuk menemani waktu santai.';
  var product = function (category, name, image, description) {
    return {
      category: category,
      name: name,
      image: IMAGE_PATH + image + '.webp',
      description: description,
      price: category === 'roti' ? 'Rp 5.000' : 'Rp 7.000'
    };
  };

  var products = [
    product('roti', 'Bagelen Keju', 'bagelen-keju', bread), product('roti', 'Roti Bagelen', 'bagelen', bread),
    product('roti', 'Roti Abon Gulung', 'roti-abon-gulung', bread), product('roti', 'Roti Abon', 'roti-abon', bread),
    product('roti', 'Roti Bagelen', 'roti-bagelen', bread), product('roti', 'Roti Boy', 'roti-boy', bread),
    product('roti', 'Roti Cokelat Topping Kacang', 'roti-coklat-topping-kacang', bread), product('roti', 'Roti Cokelat Topping Yupi', 'roti-coklat-topping-yupi', bread),
    product('roti', 'Roti Cream Meses Keju', 'roti-cream-meses-keju', bread), product('roti', 'Roti Gembul', 'roti-gembul', bread),
    product('roti', 'Roti Isi Daging', 'roti-isi-daging', bread), product('roti', 'Roti Kacang Ijo', 'roti-kacang-ijo', bread),
    product('roti', 'Roti Kacang Tanah', 'roti-kacang-tanah', bread), product('roti', 'Roti Kasur', 'roti-kasur', bread),
    product('roti', 'Roti Keju', 'roti-keju', bread), product('roti', 'Roti Kenong', 'roti-kenong', bread),
    product('roti', 'Roti Kering', 'roti-kering', bread), product('roti', 'Roti Milk', 'roti-milk', bread),
    product('roti', 'Roti Pisang Cokelat', 'roti-pisang-coklat', bread), product('roti', 'Roti Pizza', 'roti-pizza', bread),
    product('roti', 'Roti Selai Srikaya', 'roti-selai-srikaya', bread), product('roti', 'Roti Sisir', 'roti-sisir', bread),
    product('roti', 'Roti Sobek', 'roti-sobek', bread), product('roti', 'Roti Sosis', 'roti-sosis-1', bread),
    product('roti', 'Roti Sosis Spesial', 'roti-sosis-2', bread), product('roti', 'Roti Tawar', 'roti-tawar', bread),

    product('hangat', 'Espresso Double', 'espresso-double', warm), product('hangat', 'Espresso Single', 'espresso-single', warm),
    product('hangat', 'Hot Cappucino', 'hot-cappucino', warm), product('hangat', 'Hot Chocolate', 'hot-chocolate', warm),
    product('hangat', 'Kopi Filter', 'kopi-filter', warm), product('hangat', 'Kopi Susu Panas', 'kopi-susu-panas', warm),
    product('hangat', 'Kopi Tubruk', 'kopi-tubruk', warm), product('hangat', 'Susu Hangat', 'susu-hangat', warm),
    product('hangat', 'Teh Hangat', 'teh-hangat', warm), product('hangat', 'Thai Tea Hangat', 'thai-tea', warm),

    product('dingin', 'Americano Milk Tea', 'americano-milk-tea', cold), product('dingin', 'Es Cappucino', 'es-cappucino', cold),
    product('dingin', 'Es Chocolate', 'es-chocolate', cold), product('dingin', 'Es Japanese Coffee', 'es-japanese-coffee', cold),
    product('dingin', 'Es Kopi Soda', 'es-kopi-soda', cold), product('dingin', 'Es Kopi Susu', 'es-kopi-susu', cold),
    product('dingin', 'Es Lemon Tea', 'es-lemon-tea', cold), product('dingin', 'Es Matchacino', 'es-matchacino', cold),
    product('dingin', 'Es Milk Tea', 'es-milk-tea', cold), product('dingin', 'Es Susu', 'es-susu', cold),
    product('dingin', 'Es Teh', 'es-teh', cold), product('dingin', 'Es Thai Tea', 'es-thai-tea', cold)
  ];

  var CATEGORIES = {
    roti: { label: 'Roti' },
    hangat: { label: 'Minuman Hangat' },
    dingin: { label: 'Minuman Dingin' }
  };

  var grid = document.getElementById('collection-grid');
  var pagination = document.getElementById('pagination');
  var status = document.getElementById('collection-status');
  var filters = document.querySelectorAll('.filter-nav [data-filter]');
  if (!grid || !pagination) return;

  var state = { filter: 'semua', page: 1 };

  function filterFromHash() {
    var hash = window.location.hash.replace('#', '');
    return FILTERS.indexOf(hash) !== -1 ? hash : 'semua';
  }

  function visibleProducts() {
    if (state.filter === 'semua') return products;
    return products.filter(function (product) {
      return product.category === state.filter;
    });
  }

  function buildCard(product) {
    var card = document.createElement('article');
    card.className = 'collection-card product';
    if (product.category === 'dingin') card.classList.add('collection-card--cold');

    var image = document.createElement('img');
    image.className = 'collection-card__image';
    image.src = product.image;
    image.alt = product.name;
    image.loading = 'lazy';
    image.decoding = 'async';
    card.append(image);

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
    card.append(content);
    return card;
  }

  // 1 2 3 4 ... 8 - jendela 3 nomor di sekitar halaman aktif.
  function pageSlots(totalPages, currentPage) {
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

  function renderPagination(totalPages) {
    pagination.textContent = '';

    pagination.append(
      makeControl('\u2039', {
        page: state.page - 1,
        ariaLabel: 'Halaman sebelumnya',
        disabled: state.page === 1
      })
    );

    pageSlots(totalPages, state.page).forEach(function (slot) {
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
          current: slot === state.page
        })
      );
    });

    pagination.append(
      makeControl('\u203a', {
        page: state.page + 1,
        ariaLabel: 'Halaman berikutnya',
        disabled: state.page === totalPages
      })
    );
  }

  function renderStatus(list, firstIndex) {
    if (!status) return;
    if (!list.length) {
      status.textContent = 'Belum ada produk pada kategori ini.';
      return;
    }
    var lastIndex = Math.min(firstIndex + PER_PAGE, list.length);
    var label = state.filter === 'semua' ? '' : ' \u00b7 ' + CATEGORIES[state.filter].label;
    status.textContent =
      'Menampilkan ' +
      (firstIndex + 1) +
      '\u2013' +
      lastIndex +
      ' dari ' +
      list.length +
      ' produk' +
      label;
  }

  function markActiveFilter() {
    filters.forEach(function (link) {
      var isActive = (link.dataset.filter || 'semua') === state.filter;
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function render() {
    var list = visibleProducts();
    var totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    state.page = Math.min(Math.max(state.page, 1), totalPages);

    var firstIndex = (state.page - 1) * PER_PAGE;
    list.slice(firstIndex, firstIndex + PER_PAGE).forEach(function (product) {
      grid.append(buildCard(product));
    });

    grid.classList.remove('collection-grid--enter');
    void grid.offsetWidth;
    grid.classList.add('collection-grid--enter');

    renderPagination(totalPages);
    renderStatus(list, firstIndex);
    markActiveFilter();
  }

  function scrollToGrid() {
    var offset = grid.getBoundingClientRect().top + window.pageYOffset - 96;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(offset, 0), behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function setFilter(filter, options) {
    var next = FILTERS.indexOf(filter) !== -1 ? filter : 'semua';
    var changed = next !== state.filter;
    state.filter = next;
    if (changed || (options && options.fromHash)) state.page = 1;
    grid.textContent = '';
    render();
    if (options && options.scroll && changed) scrollToGrid();
  }

  pagination.addEventListener('click', function (event) {
    var control = event.target.closest('button[data-page]');
    if (!control || control.disabled) return;
    var target = Number(control.dataset.page);
    var totalPages = Math.max(1, Math.ceil(visibleProducts().length / PER_PAGE));
    if (!Number.isFinite(target) || target < 1 || target > totalPages || target === state.page) return;

    state.page = target;
    grid.textContent = '';
    render();

    var active = pagination.querySelector('button[aria-current="page"]');
    if (active) active.focus({ preventScroll: true });
    scrollToGrid();
  });

  // Pill filter adalah <a href="#roti">, jadi hash yang berubah yang jadi sumber
  // kebenaran: klik pill, tombol back, dan link dari halaman lain semuanya lewat sini.
  window.addEventListener('hashchange', function () {
    setFilter(filterFromHash(), { fromHash: true, scroll: true });
  });

  setFilter(filterFromHash(), { fromHash: true });
})();