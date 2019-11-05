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

