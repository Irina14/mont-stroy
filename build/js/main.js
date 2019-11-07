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

  if (swiperContainerMainScreen) {
    var swiper = false;

    var initSwiperMainScreen = function () {
      var widthWindow = window.innerWidth;

      if (widthWindow < 1024 && swiper === false) {
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
            },
          }
        });
      } else if (widthWindow > 1024 && swiper !== false) {
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
    var initSwiperPartners = function () {
      var swiperPartners = new Swiper ('.partners__slider.swiper-container', {
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            pagination: {
              el: '.partners__pagination.swiper-pagination',
              dynamicBullets: true,
              clickable: true,
            },
          },
          768: {
            slidesPerView: 3,
            pagination: {
              el: '.partners__pagination.swiper-pagination',
              dynamicBullets: true,
              clickable: true,
            },
            navigation: {
              nextEl: null,
              prevEl: null,
            },
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 27,
            pagination: {
              el: null,
            },
            navigation: {
              nextEl: '.partners__button-next.swiper-button-next',
              prevEl: '.partners__button-prev.swiper-button-prev',
            },
          },
        }
      });
    };

    initSwiperPartners();

    window.addEventListener('resize', function () {
      initSwiperPartners();
    });
  }
})();


//# sourceMappingURL=main.js.map
