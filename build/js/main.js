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

//# sourceMappingURL=main.js.map
