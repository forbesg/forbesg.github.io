(function () {
  "use strict";
  var navToggle = document.querySelector('.nav-toggle'),
      imageBlocks = document.querySelectorAll('.image-block'),
      mainNav = document.querySelector('.main-nav');
  function toggleNavClass (e) {
    e.preventDefault();
    mainNav.classList.toggle('open');
  }
  function addOverlay (e) {
    e.preventDefault();
    e.target.children[1].classList.add('show');
  }
  function removeOverlay (e) {
    e.preventDefault();
    e.target.children[1].classList.remove('show');
  }
  navToggle.addEventListener('click', toggleNavClass);
  for (var i = 0; i < imageBlocks.length; i += 1) {
    imageBlocks[i].addEventListener('mouseenter', addOverlay);
    imageBlocks[i].addEventListener('mouseleave', removeOverlay);
  }
})();
