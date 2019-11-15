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

