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
        observer: true,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            pagination: {
              el: '.partners__pagination.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: null,
              prevEl: null,
            },
          },
          768: {
            slidesPerView: 3,
            pagination: {
              el: '.partners__pagination.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
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
              dynamicBullets: false,
              clickable: false,
            },
            navigation: {
              nextEl: '.partners__button-next.swiper-button-next',
              prevEl: '.partners__button-prev.swiper-button-prev',
            },
          },
        }
      });

      swiperPartners.update();
    };

    initSwiperPartners();

    window.addEventListener('resize', function () {
      initSwiperPartners();
    });
  }
})();

