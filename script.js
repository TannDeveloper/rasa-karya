const cartCount = document.getElementById('cart-count');
const menuButton = document.querySelector('.menu');
const toast = document.getElementById('toast');
const addButtons = document.querySelectorAll('.product button');

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
  const { product } = event.currentTarget.dataset;

  cartTotal += 1;
  cartCount.textContent = cartTotal;
  showToast(`Ditambahkan: ${product}`);
}

function toggleMenu() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
}

addButtons.forEach((button) => button.addEventListener('click', addToCart));
menuButton?.addEventListener('click', toggleMenu);
