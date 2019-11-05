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
