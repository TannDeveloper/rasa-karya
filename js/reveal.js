/*
  Scroll reveal for Rasa Karya.
  Adds .reveal to a fixed set of selectors, then flips .is-visible once each
  element enters the viewport. Unobserves after firing: one-way, no flicker.
  ponytail: one observer for the whole site instead of per-page scroll logic.
*/
(function () {
  var SELECTORS = [
    '.bake-schedule',
    '.section-head',
    '.products > *',
    '.stats > *',
    '.story-copy',
    '.story img',
    '.partner dl',
    '.partner-inner > *',
    '.about-origin-copy',
    '.about-origin-photo',
    '.about-section-heading',
    '.about-timeline > li',
    '.values-heading',
    '.about-values > .value-card',
    '.about-facilities-copy',
    '.about-facilities-photo',
    '.gateway-card',
    '.collection-grid > *',
    '.service-cards > *',
    '.form-container',
    '.sidebar-contact',
    '.partner-logos-grid > *',
    '.info-card',
    '.map-card',
    '.footer-grid > *'
  ];

  var RIGHT = ['.story img', '.about-origin-photo', '.about-facilities-photo', '.map-card'];

  if (!('IntersectionObserver' in window)) return;

  var targets = [];
  SELECTORS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      // Group members stagger by their index within the group.
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.classList.add('reveal');
      if (RIGHT.indexOf(sel) !== -1) el.classList.add('reveal--right');
      if (siblings > 0) el.style.setProperty('--delay', Math.min(siblings, 3) * 70 + 'ms');
      targets.push(el);
    });
  });

  var observerFired = false;

  var observer = new IntersectionObserver(
    function (entries) {
      observerFired = true;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.01 }
  );

  var pending = [];
  targets.forEach(function (el) {
    // Anything already on screen at load shows immediately, no hidden flash.
    var box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.9 && box.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
      pending.push(el);
    }
  });

  // Safety net: if the observer never reports a single entry (starved frame in
  // a hidden tab, print, snapshot tooling) nothing would ever appear. Only then
  // reveal everything; a healthy observer keeps the staggered scroll entrance.
  window.addEventListener('beforeprint', function () {
    pending.forEach(function (el) { el.classList.add('is-visible'); });
  });
  window.setTimeout(function () {
    if (!observerFired) {
      pending.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }, 1200);
})();
