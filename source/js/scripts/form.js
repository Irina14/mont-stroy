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
