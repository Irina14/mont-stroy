'use strict';

(function () {
  // Плавный переход по якорной ссылке
  var setSmoothTransition = function (selector, time) {
    $(document).ready(function () {
      $(selector).on('click', function (evt) {
        evt.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, time);
      });
    });
  };

  var header = document.querySelector('.header');

  if (header) {
    setSmoothTransition('.header__button', 2000);
    setSmoothTransition('.header__item a', 1500);
  }

  var mainScreen = document.querySelector('.main-screen');

  if (mainScreen) {
    setSmoothTransition('.main-screen__button--services', 1500);
    setSmoothTransition('.main-screen__button--contacts', 2000);
  }

  var footerMenuDown = document.querySelector('.footer__menu-down');

  if (footerMenuDown) {
    setSmoothTransition('.footer__menu-down .footer__menu-item a', 1500);
  }

  var footerMenuUp = document.querySelector('.footer__menu-up');

  if (footerMenuUp) {
    setSmoothTransition('.footer__menu-up .footer__menu-item a', 1500);
  }

  var footerLogo = document.querySelector('.footer__logo');

  if (footerLogo) {
    setSmoothTransition('.footer__logo', 2000);
  }
})();
