import {
  _fancyboxSettings,
  fancyboxDefault,
  fancyboxMessage,
} from './js/_fancybox';
import {
  inputmaskPhone,
} from "./js/_inputmask"
import {
  selectizeDefault,
} from './js/_selectize';
import {
  slickDefault,
} from './js/_slick';
import {
  tooltipDefault,
} from './js/_tooltip';

import {
  headerComponent,
} from './js/headerComponent';

import {
  mainPage,
} from './js/mainPage';

//removeIf(production)
import {
  demoFunc
} from './js/demoJS';
//endRemoveIf(production)

window.elijah = {
  _fancyboxSettings,
  fancyboxDefault,  // запуск через вызов функции
  fancyboxMessage,  // запуск через вызов функции
  inputmaskPhone,
  selectizeDefault,
  slickDefault,
  tooltipDefault,
  headerComponent,
  mainPage,
  //removeIf(production)
  demoFunc,
  //endRemoveIf(production)
}

function initFunc() {
  $(document).ready(function () {
    /* Скрипты необходимые только на конкретной странице */
    mainPage()
  
    /* Компоненты */
    headerComponent()
  
    /* Плагины */
    inputmaskPhone()
    selectizeDefault()
    slickDefault()
    tooltipDefault()
  
    //removeIf(production)
    /* То что должно быть вырезано на проде. Начало */
    demoFunc()
    /* То что должно быть вырезано на проде. Конец */
    //endRemoveIf(production)
  })
}

try {
  if (window.frameCacheVars !== undefined) {
    BX.addCustomEvent("onFrameDataReceived", function () {
      initFunc()
    });
  } else {
    BX.ready(function () {
      initFunc()
    });
  }
} catch (e) {
  initFunc()
}