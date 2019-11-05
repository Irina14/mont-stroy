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
  var swiperContainer = document.querySelector('.swiper-container');

  if (swiperContainer) {
    var swiper = false;

    var initSwiper = function () {
      var widthWindow = window.innerWidth;

      if (widthWindow < 1024 && swiper === false) {
        swiper = new Swiper ('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
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

    initSwiper();

    window.addEventListener('resize', function () {
      initSwiper();
    });
  }
})();


//# sourceMappingURL=main.js.map
