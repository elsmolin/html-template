import {
  inputmaskInit,
  inputMask
} from "./js/inputmask"
// import {
//   tooltipCustomInit,
// } from "./js/tooltip"
// import { selectizeInit, selectize } from "./js/selectize"
// import {
//   fancyboxInit,
//   fancyboxMessage,  // Отдельный попап сообщения с колбеками
//   fancyboxTypes  // Типовые настройки для попапов
// } from "./js/fancybox"
//removeIf(production)
// import {  // Конкретная карусель
//   slickMainInit,  // Конкретная карусель
// } from "./js/slick"
//endRemoveIf(production)
// import { formInit, form } from "./js/form"
import { headerInit } from "./js/header"

// import { mainInit } from './js/main'

import { demoInit } from "./js/_demoJS"

window._custom_ = {
  inputMask,
  // fancybox: {
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
}

$(document).ready(function () {
  /* Компоненты */
  /* inputmask */
  inputmaskInit()
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
  headerInit()
  /* header */

  /* Скрипты необходимые только на конкретной странице */
  /* main */
  // mainInit()
  /* main */

  //removeIf(production)
  /* То что должно быть вырезано на проде. Начало */
  demoInit()
  /* То что должно быть вырезано на проде. Конец */
  //endRemoveIf(production)
})

//removeIf(production)
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
const initSlickFunc = () => {
  $(document).ready(function () {
    /* slick */
    // window._custom_.slickMainInit()
    /* slick */
  })
}


// Запуск всех каруселей на проекте
try {
  if (window.frameCacheVars !== undefined) {
    BX.addCustomEvent("onFrameDataReceived", function () {
      // initSlickFunc()
    });
  } else {
    BX.ready(function () {
      // initSlickFunc()
    });
  }
} catch (e) {
  initSlickFunc()
}
//endRemoveIf(production)