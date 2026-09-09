// "Back to top" for the bottom page navigation.
//
// The plain href="#top" fragment jump is unreliable (and on some pages
// js/scroll.js also hooks every anchor click), so scroll explicitly.
// Capture phase + stopImmediatePropagation keeps scroll.js from
// double-animating the same click.
(function () {
  document.addEventListener('click', function (e) {
    var trigger = e.target && e.target.closest ? e.target.closest('[data-scroll-top]') : null;
    if (!trigger) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, true);
})();
