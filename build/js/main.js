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
    var servicesBlockActive = services.querySelector('.services__block-active');

    var removeClass = function () {
      Array.prototype.slice.call(servicesItems).forEach(function (item) {
        item.classList.remove('services__item--active');
      });
    };

    var itemClickHandlerTablet = function (item) {
      removeClass();
      var itemCopy = item.cloneNode(true);
      item.classList.add('services__item--active');
      servicesBlockActive.innerHTML = '';
      servicesBlockActive.appendChild(itemCopy);
    };

    var itemClickHandlerMobile = function (item) {
      if (!item.classList.contains('services__item--active')) {
        removeClass();
        item.classList.add('services__item--active');
      }
    };

    var initAccordion = function () {
      var widthWindow = window.innerWidth;

      if (widthWindow < 1024 && widthWindow >= 768) {
        Array.prototype.slice.call(servicesItems).forEach(function (item) {
          item.removeEventListener('click', itemClickHandlerMobile);
          item.addEventListener('click', function () {
            itemClickHandlerTablet(item);
          });
        });
      }

      if (widthWindow < 768) {
        Array.prototype.slice.call(servicesItems).forEach(function (item) {
          item.removeEventListener('click', itemClickHandlerTablet);
          item.addEventListener('click', function () {
            itemClickHandlerMobile(item);
          });
        });
      }
    };

    initAccordion();

    window.addEventListener('resize', function () {
      initAccordion();
    });
  }
})();

'use strict';

(function () {
  var swiperContainerMainScreen = document.querySelector('.main-screen__slider.swiper-container');
  var swiperContainerPartners = document.querySelector('.partners__slider.swiper-container');
  var DESKTOP_WIDTH = 1024;

  if (swiperContainerMainScreen) {
    var swiper = false;

    var initSwiperMainScreen = function () {
      var widthWindow = window.innerWidth;

      if (widthWindow < DESKTOP_WIDTH && swiper === false) {
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
      } else if (widthWindow > DESKTOP_WIDTH && swiper !== false) {
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
  var TIME = 600;

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
    setSmoothTransition('.header__button', TIME);
    setSmoothTransition('.header__item a', TIME);
  }

  var mainScreen = document.querySelector('.main-screen');

  if (mainScreen) {
    setSmoothTransition('.main-screen__button--services', TIME);
    setSmoothTransition('.main-screen__button--contacts', TIME);
  }

  var footerMenuDown = document.querySelector('.footer__menu-down');

  if (footerMenuDown) {
    setSmoothTransition('.footer__menu-down .footer__menu-item a', TIME);
  }

  var footerMenuUp = document.querySelector('.footer__menu-up');

  if (footerMenuUp) {
    setSmoothTransition('.footer__menu-up .footer__menu-item a', TIME);
  }

  var footerLogo = document.querySelector('.footer__logo');

  if (footerLogo) {
    setSmoothTransition('.footer__logo', TIME);
  }
})();

//# sourceMappingURL=main.js.map
