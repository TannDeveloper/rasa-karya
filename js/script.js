const cartCount = document.getElementById('cart-count');
const menuButton = document.querySelector('.menu');
const toast = document.getElementById('toast');
const addButtons = document.querySelectorAll('.product button, .product-info button');
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

let cartTotal = 0;
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');

  toastTimer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

function addToCart(event) {
  const button = event.currentTarget;
  const { product } = button.dataset;

  cartTotal += 1;
  cartCount.textContent = cartTotal;

  // Restart the CSS acknowledgement: remove the class, force a reflow, re-add.
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');

  const card = button.closest('.product');
  if (card) {
    delete card.dataset.added;
    void card.offsetWidth;
    card.dataset.added = '';
    window.setTimeout(() => delete card.dataset.added, 500);
  }

  showToast(`Ditambahkan: ${product}`);
}

function toggleMenu() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.textContent = isOpen ? 'Menu' : 'Tutup';
}

function setActiveNavigation(event) {
  const selectedLink = event.currentTarget;

  document.querySelectorAll('nav a').forEach((link) => {
    link.removeAttribute('aria-current');
  });

  selectedLink.setAttribute('aria-current', 'page');
}

addButtons.forEach((button) => button.addEventListener('click', addToCart));
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', setActiveNavigation);
});
menuButton?.addEventListener('click', toggleMenu);
