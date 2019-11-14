'use strict';

(function () {
  var swiperContainerMainScreen = document.querySelector('.main-screen__slider.swiper-container');
  var swiperContainerPartners = document.querySelector('.partners__slider.swiper-container');
  var DESKTOP_WIDTH = 1024;
  var TABLET_WIDTH = 768;

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
    var swiperPartners = false;

    var initSwiperPartners = function () {
      var widthWindow = window.innerWidth;

      if (widthWindow < TABLET_WIDTH) {
        if (swiperPartners !== false) {
          swiperPartners.destroy();
        }
        swiperPartners = new Swiper ('.partners__slider.swiper-container', {
          loop: true,
          slidesPerView: 1,
          pagination: {
            el: '.partners__pagination.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
        });
      }

      if (widthWindow >= TABLET_WIDTH && widthWindow < DESKTOP_WIDTH) {
        if (swiperPartners !== false) {
          swiperPartners.destroy();
        }
        swiperPartners = new Swiper ('.partners__slider.swiper-container', {
          loop: true,
          slidesPerView: 3,
          pagination: {
            el: '.partners__pagination.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
        });
      }

      if (widthWindow >= DESKTOP_WIDTH) {
        if (swiperPartners !== false) {
          swiperPartners.destroy();
        }
        swiperPartners = new Swiper ('.partners__slider.swiper-container', {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 27,
          navigation: {
            nextEl: '.partners__button-next.swiper-button-next',
            prevEl: '.partners__button-prev.swiper-button-prev',
          },
        });
      }
    };

    initSwiperPartners();

    window.addEventListener('resize', function () {
      initSwiperPartners();
    });
  }
})();

