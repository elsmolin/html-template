(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  /**
   * InputMask плагин
   */

  /* RegExp */
  var regexNumberOnly = /\d+/g;
  /**
   * @description Вырезает все символы кроме цифр и возвращает последние
   * <phoneLength - 1> цифр
   * @param {String} inputValue Значение инпута
   * @param {Number} phoneLength Кол-во цифр необходимых для вставки.
   * Зависит от маски
   * @default phoneLength 10
   */

  var filterPhoneNumber = function filterPhoneNumber(inputValue) {
    var phoneLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var numbers = inputValue.trim().match(regexNumberOnly).join('');
    var startIndex = numbers.length - phoneLength;
    var value = numbers.slice(startIndex, numbers.length);
    return value;
  };

  var inputmaskInit = function inputmaskInit() {
    $('[type="tel"]').inputmask({
      mask: "+7 (999) 999-99-99",
      onBeforeMask: function onBeforeMask(initialValue) {
        if (initialValue.length < 10) return;
        return filterPhoneNumber(initialValue);
      },
      onBeforePaste: function onBeforePaste(pastedValue) {
        if (pastedValue.length < 10) return;
        return filterPhoneNumber(pastedValue);
      }
    });
  };
  var inputMask = {
    reInitInputMask: function reInitInputMask() {
      $('[type="tel"]').inputmask('remove').val('');
      inputmaskInit();
      console.log('inputMask:[type="tel"] - перезапущен');
    }
  };

  /**
   * FancyBox плагин
   */
  var _isMobile_ = /Android|webOS|iPhone|iPod|iPad|BlackBerry/.test(navigator.userAgent) && !window.MSStream;

  /**
   * Шапка
   */
  var headerInit = function headerInit() {
    /* Отображение мобильного меню */
    $('body').on('click', '[js-mobile-menu-toggler]', function () {
      $('#header_mobile_menu').toggleClass('customshow');
      $('.body_global').toggleClass('scroll-disabled');
    });
  };

  window._custom_ = {
    inputMask: inputMask // form,
    // tooltip,
    // select,
    // carousel,

  };
  $(document).ready(function () {
    /* Компоненты */
    inputmaskInit(); // tooltipInit()
    // selectInit()
    // popupInit()
    // carouselInit()
    // formInit()

    headerInit();
    /* Скрипты необходимые только на конкретной странице */
    // mainInit()

    /* delete this */
    // demoInit()
  });

}));
