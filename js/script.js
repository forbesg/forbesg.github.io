(function () {
  "use strict";
  var navToggle = document.querySelector('.nav-toggle'),
      imageBlocks = document.querySelectorAll('.image-block'),
      mainNav = document.querySelector('.main-nav'),
      menuItems = mainNav.getElementsByTagName('li');
  function toggleNavClass (e) {
    e.preventDefault();
    function addListItemClass (el, num) {
      console.log(el, num / 10);
      setTimeout(function () {
        el.classList.add('animated');
      }, num * 100)
      // el.classList.add('animated');
    }
    if (mainNav.classList.contains('open')) {
      mainNav.classList.add('leave');
      mainNav.classList.remove('open');
      for (var i = 0; i < menuItems.length; i += 1) {
        menuItems[i].classList.remove('animated');
      };
      setTimeout(function () {
        mainNav.classList.remove('leave');
      }, 500)
    } else {
      mainNav.classList.add('open');
      for (var i = 0; i < menuItems.length; i += 1) {
        addListItemClass(menuItems[i], i);
      };
    }
    navToggle.classList.toggle('open');
    // mainNav.classList.toggle('open');

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
