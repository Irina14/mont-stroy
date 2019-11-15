'use strict';

(function () {
  var form = document.querySelector('.form');

  if (form) {
    var userNameInput = form.querySelector('#user-name');
    var userPhoneInput = form.querySelector('#user-phone');
    var userEmailInput = form.querySelector('#user-email');
    var userMessageInput = form.querySelector('#user-message');
    var fieldPhone = form.querySelector('.form__field--phone');
    var formButton = form.querySelector('.form__button');
    var fields = form.querySelectorAll('input');

    // Маска для поля ввода телефона
    var phoneMask = IMask(userPhoneInput, {
      mask: '+7(000)000-00-00'
    });

    // Проверка валидности номера телефона
    var validPhone = function (mask) {
      var reg = /^\d{10}$/;
      var phoneValue = mask.unmaskedValue;
      var valid = reg.test(phoneValue);
      return valid;
    };

    // Создание сообщения об ошибке
    var createMessage = function (text) {
      var message = document.createElement('span');
      message.classList.add('form__error-text');
      fieldPhone.appendChild(message);
      message.textContent = text;
    };

    // Удаление сообщения об ошибке
    var removeMessage = function () {
      var errorText = fieldPhone.querySelector('.form__error-text');
      if (errorText) {
        fieldPhone.removeChild(errorText);
      }
    };

    // Проверка валидности поля
    var validField = function (field) {
      if (!field.validity.valid) {
        field.classList.add('form__error');
      } else {
        field.classList.remove('form__error');
      }
    };

    // Удаление рамки ошибки
    var removeError = function () {
      Array.prototype.slice.call(fields).forEach(function (field) {
        if (field.classList.contains('form__error')) {
          field.classList.remove('form__error');
        }
      });
    };

    var formButtonClickHandler = function (evt) {
      validField(userNameInput);
      validField(userPhoneInput);

      if (userPhoneInput.validity.valid && !validPhone(phoneMask)) {
        evt.preventDefault();
        userPhoneInput.classList.add('form__error');
        if (!fieldPhone.querySelector('.form__error-text')) {
          createMessage('Неккоректный телефон');
        }
      } else {
        evt.returnValue = true;
        removeMessage();
      }

      validField(userEmailInput);
      validField(userMessageInput);
    };

    var documentClickHandler = function (evt) {
      if (evt.target !== formButton) {
        removeError();
        removeMessage();
      }
    };

    formButton.addEventListener('click', formButtonClickHandler);
    document.addEventListener('click', documentClickHandler);
  }
})();

'use strict';

(function () {
  var menu = document.querySelector('.header__menu');

  if (menu) {
    var ESC_KEYCODE = 27;
    var menuButton = document.querySelector('.header__toggle');

    var documentClickHandler = function (evt) {
      if (evt.target !== menuButton) {
        menu.classList.remove('header__menu--open');
        menuButton.classList.remove('header__toggle--open');
      }
    };

    var documentEscKeyHandler = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        menu.classList.remove('header__menu--open');
        menuButton.classList.remove('header__toggle--open');
      }
    };

    menuButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      menu.classList.toggle('header__menu--open');
      menuButton.classList.toggle('header__toggle--open');

      if (menu.classList.contains('header__menu--open')) {
        document.addEventListener('click', documentClickHandler);
        document.addEventListener('keydown', documentEscKeyHandler);
      } else {
        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keydown', documentEscKeyHandler);
      }
    });
  }
})();

'use strict';

(function () {
  var services = document.querySelector('.services');

  if (services) {
    var servicesItems = services.querySelectorAll('.services__item');

    var closeBlocks = function () {
      Array.prototype.slice.call(servicesItems).forEach(function (item) {
        item.classList.remove('services__item--active');
      });
    };

    Array.prototype.slice.call(servicesItems).forEach(function (item) {
      item.addEventListener('click', function () {
        if (item.classList.contains('services__item--active')) {
          item.classList.remove('services__item--active');
        } else {
          closeBlocks();
          item.classList.add('services__item--active');
        }
      });
    });
  }
})();

'use strict';

(function () {
  var swiperContainerMainScreen = document.querySelector('.main-screen__slider.swiper-container');
  var swiperContainerPartners = document.querySelector('.partners__slider.swiper-container');
  var MEDIA_QUERY_TABLET = '(max-width: 1023px)';
  var MEDIA_QUERY_DESKTOP = '(min-width: 1024px)';

  if (swiperContainerMainScreen) {
    var swiper = false;

    var initSwiperMainScreen = function () {
      if ((window.matchMedia(MEDIA_QUERY_TABLET).matches) && swiper === false) {
        swiper = new Swiper ('.main-screen__slider.swiper-container', {
          loop: true,
          pagination: {
            el: '.main-screen__pagination.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }
        });
      } else if ((window.matchMedia(MEDIA_QUERY_DESKTOP).matches) && swiper !== false) {
        swiper.destroy();
        swiper = false;
      }
    };

    initSwiperMainScreen();

    window.addEventListener('resize', function () {
      initSwiperMainScreen();
    });
  }

  if (swiperContainerPartners) {
    var swiperPartners = new Swiper ('.partners__slider.swiper-container', {
      observer: true,
      loop: true,
      pagination: {
        el: '.partners__pagination.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.partners__button-next.swiper-button-next',
        prevEl: '.partners__button-prev.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 27,
          centeredSlides: false,
        },
      }
    });
  }
})();


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

//# sourceMappingURL=main.js.map
