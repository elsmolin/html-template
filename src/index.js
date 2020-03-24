import {
  _fancyboxSettings,
  fancyboxDefault,
} from './js/_fancybox';
import {
  inputmaskPhone,
} from "./js/_inputmask"
import {
  slickDefault,
} from './js/_slick';
import {
  tooltipDefault,
} from './js/_tooltip';
import {
  datepickerDefault,
} from './js/_datepicker';
import {
  markEmptyFields,
  updFileInput
} from './js/_form';

import {
  headerComponent,
} from './js/headerComponent';

// import {
//   mainPage,
// } from './js/mainPage';

//removeIf(production)
import {
  // demoFunc
} from './js/demoJS';
//endRemoveIf(production)

export default {
  _fancyboxSettings,
  fancyboxDefault,
  inputmaskPhone,
  slickDefault,
  tooltipDefault,
  markEmptyFields,
  updFileInput,
  datepickerDefault,
  //removeIf(production)
  // demoFunc,
  //endRemoveIf(production)
}

function initFunc() {
  $(document).ready(function () {
    /* Скрипты необходимые только на конкретной странице */
    // mainPage()
  
    /* Компоненты */
    headerComponent()
  
    /* Плагины */
    inputmaskPhone()
    slickDefault()
    tooltipDefault()
    datepickerDefault()
  
    //removeIf(production)
    /* То что должно быть вырезано на проде. Начало */
    // demoFunc()
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