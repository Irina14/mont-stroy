'use strict';

(function () {
  var TRANSITION_TIME = 600;

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
    setSmoothTransition('.header__button', TRANSITION_TIME);
    setSmoothTransition('.header__item a', TRANSITION_TIME);
  }

  var mainScreen = document.querySelector('.main-screen');

  if (mainScreen) {
    setSmoothTransition('.main-screen__button--services', TRANSITION_TIME);
    setSmoothTransition('.main-screen__button--contacts', TRANSITION_TIME);
  }

  var footerMenuDown = document.querySelector('.footer__menu-down');

  if (footerMenuDown) {
    setSmoothTransition('.footer__menu-down .footer__menu-item a', TRANSITION_TIME);
  }

  var footerMenuUp = document.querySelector('.footer__menu-up');

  if (footerMenuUp) {
    setSmoothTransition('.footer__menu-up .footer__menu-item a', TRANSITION_TIME);
  }

  var footerLogo = document.querySelector('.footer__logo');

  if (footerLogo) {
    setSmoothTransition('.footer__logo', TRANSITION_TIME);
  }
})();
