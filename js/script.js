$(document).ready(function () {

  // Mobile Navigation Toggle button
  $('.nav-toggle').on('click', function () {
    $('.main-nav').slideToggle();
    var icon = $(this).children('i');
    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-chevron-up').removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars').removeClass('fa-chevron-up');
    }
  });

  // Overlay animation for project containers on homepage
  $('.image-block').on('mouseover', function () {
    $(this.closest('.project-container')).find('.overlay-block').addClass('button-hover');
  });
  $('.overlay-block').on('mouseleave', function () {
    $(this).removeClass('button-hover');
  });

});
