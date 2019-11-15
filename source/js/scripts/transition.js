'use strict';

(function () {
  var TRANSITION_TIME = 600;

  var header = document.querySelector('.header');

  if (header) {
    var scroll = new SmoothScroll('.header__button, .header__item a', {
      speed: TRANSITION_TIME
    });
  }

  var mainScreen = document.querySelector('.main-screen');

  if (mainScreen) {
    var scroll = new SmoothScroll('.main-screen__button--services, .main-screen__button--contacts', {
      speed: TRANSITION_TIME
    });
  }

  var footerMenuDown = document.querySelector('.footer__menu-down');

  if (footerMenuDown) {
    var scroll = new SmoothScroll('.footer__menu-down .footer__menu-item a', {
      speed: TRANSITION_TIME
    });
  }

  var footerMenuUp = document.querySelector('.footer__menu-up');

  if (footerMenuUp) {
    var scroll = new SmoothScroll('.footer__menu-up .footer__menu-item a', {
      speed: TRANSITION_TIME
    });
  }

  var footerLogo = document.querySelector('.footer__logo');

  if (footerLogo) {
    var scroll = new SmoothScroll('.footer__logo', {
      speed: TRANSITION_TIME
    });
  }
})();
