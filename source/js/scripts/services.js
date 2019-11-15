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
