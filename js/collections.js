/*
  Rasa Karya - koleksi roti & minuman (satu halaman, filter sebagai tab).

  Data masih dummy: tiap kategori berisi 48 item, nama di-cycle dari produk
  yang sudah ada (6 roti, 2 minuman hangat, 2 minuman dingin). Ganti
  BREADS / WARM_DRINKS / COLD_DRINKS atau PER_CATEGORY kalau data asli sudah siap.

  Alur: filter (semua / roti / hangat / dingin) -> grid 6 per halaman -> pager.
  Filter disimpan di URL hash (#roti, #hangat, #dingin) supaya bisa di-bookmark,
  di-share, dan tombol back browser tetap jalan.
*/
(function () {
  'use strict';

  var PER_PAGE = 6;
  var PER_CATEGORY = 48;
  var IMAGE = '../assets/images/hero-roti.png';
  var IMAGE_ALT = 'Aneka roti segar';
  var FILTERS = ['roti', 'hangat', 'dingin'];

  var BREADS = [
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

  var WARM_DRINKS = [
    {
      name: 'Americano',
      price: 'Rp 7.000',
      energy: '9 kkal/cup',
      description: 'Kopi hitam dengan cita rasa kuat dan aroma khas, pilihan pas untuk menemani harimu.',
      icon: 'coffee'
    },
    {
      name: 'Susu Jahe',
      price: 'Rp 7.000',
      energy: '150 kkal/cup',
      description: 'Perpaduan susu hangat yang lembut dan jahe aromatik untuk menemani waktu santai.',
      icon: 'local_cafe'
    }
  ];

  var COLD_DRINKS = [
    {
      name: 'Es Kopi Susu',
      price: 'Rp 7.000',
      energy: '120 kkal/cup',
      description: 'Espresso, susu, dan es berpadu dalam minuman yang creamy dan menyegarkan.',
      icon: 'glass_cup',
      cold: true
    },
    {
      name: 'Es Kopi Susu Gula Aren',
      price: 'Rp 7.000',
      energy: '130 kkal/cup',
      description: 'Kopi susu dingin dengan manis legit gula aren, nikmat disajikan bersama roti artisan.',
      icon: 'local_drink',
      cold: true
    }
  ];

  var CATEGORIES = {
    roti: { label: 'Roti', templates: BREADS },
    hangat: { label: 'Minuman Hangat', templates: WARM_DRINKS },
    dingin: { label: 'Minuman Dingin', templates: COLD_DRINKS }
  };

  var grid = document.getElementById('collection-grid');
  var pagination = document.getElementById('pagination');
  var status = document.getElementById('collection-status');
  var filters = document.querySelectorAll('.filter-nav [data-filter]');
  if (!grid || !pagination) return;

  var products = [];
  Object.keys(CATEGORIES).forEach(function (key) {
    var templates = CATEGORIES[key].templates;
    for (var index = 0; index < PER_CATEGORY; index += 1) {
      var template = templates[index % templates.length];
      products.push({
        category: key,
        name: template.name,
        price: template.price,
        energy: template.energy,
        description: template.description,
        icon: template.icon || null,
        cold: Boolean(template.cold)
      });
    }
  });

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
    if (product.cold) card.classList.add('collection-card--cold');

    if (product.icon) {
      var thumb = document.createElement('div');
      thumb.className = 'collection-card__image collection-card__image--drink';
      thumb.setAttribute('aria-hidden', 'true');
      var glyph = document.createElement('span');
      glyph.className = 'material-symbols-outlined';
      glyph.textContent = product.icon;
      thumb.append(glyph);
      card.append(thumb);
    } else {
      var image = document.createElement('img');
      image.className = 'collection-card__image';
      image.src = IMAGE;
      image.alt = IMAGE_ALT;
      image.loading = 'lazy';
      image.decoding = 'async';
      card.append(image);
    }

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