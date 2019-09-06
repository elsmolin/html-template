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
      console.info('inputMask: [type="tel"] - перезапущен');
    }
  };

  var headerInit = function headerInit() {
    /* Отображение мобильного меню */
    $('body').on('click', '.js-menu-toggler', function () {
      $('#header_menu').toggleClass('-show-');
      $('.body_global').toggleClass('-scroll_off-');
    });
  };

  var demoInit = function demoInit() {
    // ToDo...
    console.info('demoInit Inject');
  };

  window._custom_ = {
    inputMask: inputMask // fancybox: {
    //   fancyboxTypes,
    //   fancyboxMessage,
    // },
    // form,
    // tooltip: {
    //   tooltipCustomInit,
    // },
    // selectize: {
    // },
    //removeIf(production)
    // slick: {
    //   slickMainInit,
    // }
    //endRemoveIf(production)

  };
  $(document).ready(function () {
    /* Компоненты */

    /* inputmask */
    inputmaskInit();
    /* inputmask */

    /* tooltip */
    // tooltipInit()

    /* tooltip */

    /* selectize */
    // selectizeInit()

    /* selectize */

    /* fancybox */
    // fancyboxInit()

    /* fancybox */

    /* form */
    // formInit()

    /* header */

    headerInit();
    /* header */

    /* Скрипты необходимые только на конкретной странице */

    /* main */
    // mainInit()

    /* main */
    //removeIf(production)

    /* То что должно быть вырезано на проде. Начало */

    demoInit();
    /* То что должно быть вырезано на проде. Конец */
    //endRemoveIf(production)
  }); //removeIf(production)

  /**
   * Карусели.
   * Т.к. они на каждой странице уникальные, то лучше, чтобы
   * внедряющий раскидал каждую инициализацию на свою страницу.
   * После, админ проекта, пересобрал исходники "npm run build",
   * что в итоге вырежет из фронта дублирование (разбросанные карусели).
   * Для мотивации в битрикс окружении карусели не должны работать.
   * Инструкция по сборке в README.md
   */
  // Список всех каруселей на проекте

  var initSlickFunc = function initSlickFunc() {
    $(document).ready(function () {
      /* slick */
      // window._custom_.slickMainInit()

      /* slick */
    });
  }; // Запуск всех каруселей на проекте


  try {
    if (window.frameCacheVars !== undefined) {
      BX.addCustomEvent("onFrameDataReceived", function () {// initSlickFunc()
      });
    } else {
      BX.ready(function () {// initSlickFunc()
      });
    }
  } catch (e) {
    initSlickFunc();
  } //endRemoveIf(production)

}));
