/*!
 * Суровый код ждущий своего часа
 */
/**
 * Мобильное устройство или нет
 */
const _isMobile_ = /Android|webOS|iPhone|iPod|iPad|BlackBerry/.test(navigator.userAgent) && !window.MSStream

/**
 * Функция плавного скролла к якорю
 * @param {Event} $event
 * @param {Element} $this
 * @example <a href="//url#anchor" data-header=".header-fixed" onclick="window.smoothScroll(event, this)">Anchor</a>
 */
const smoothScroll = ($event, $this) => {
  $event.preventDefault()
  const $fixedHeaderClass = $($this).data('header')
  const $href = $($this).attr('href').split('#')
  const $id = $href.pop()
  const $fixedHeader = $($fixedHeaderClass)
  const $heightNavbar = $fixedHeader[0] ? $fixedHeader.height() : 0
  const scrollTop = $(`#${$id}`).offset().top - $heightNavbar

  $('body, html').animate({
    scrollTop
  }, 1000)
}

/**
 * Анимация полёта
 * @param {HTMLElement} $this Элемент, вызывающий анимацию
 * полёта
 * @extends [data-parent] Где искать элемент полёта.
 * Необязателен. По умолчанию ищет в, инициализирующего событие,
 * элементе
 * @extends [data-target] Куда произойдёт полёт
 * @extends [data-element] Что полетит
 * @example <button data-target="#basket" data-parent=".parent-class" data-element=".fly-element" onclick="window.flyAnimation(this)"></button>
 */
const flyAnimation = ($this) => {
  if ($($this).hasClass('animation')) return

  /* Доп. анимация инициализирующего элемента */
  $($this).addClass('animation')
  setTimeout(() => {
    $($this).removeClass('animation')
  }, 200);

  /* Вспомогательные переменные */
  const $parent = $($this).data('parent')
  const $element = $($this).data('element')
  const $target = $($($this).data('target'))
  let $flyElement
  if ($parent) {
    $flyElement = $($this).closest($parent).find($element)
  } else {
    $flyElement = $($this).find($element)
  }

  setTimeout(() => {
    if ($flyElement.eq(0)) {
      /* "Хитроевымудренное" вычисление позиционирования из-за position:fixed у таргета */
      const $flyElementClone = $flyElement.clone()
        .offset({  // Клонирование, позиционирование, стили
          top: $flyElement.offset().top - $(document).scrollTop(),
          left: $flyElement.offset().left
        })
        .css({
          'opacity': '0.5',
          'position': 'fixed',
          'z-index': '100',
          'color': '#d31145'
        })
        .appendTo($('body'))
      
      $flyElement.animate({  // Скрывание оригинала
        opacity: 0
      }, 1)
        
      $flyElementClone.animate({  // Полёт
        'font-size': '16px',
        'top': $target.offset().top - $(document).scrollTop() + 6,
        'left': $target.position().left + 9
      }, 600, function() {  // анимирование мигания таргета
        $target.addClass('animation')

        $flyElementClone.animate({
          'opacity': '0',
        }, function () {
          $flyElementClone.detach()
          $target.removeClass('animation')
        
          $flyElement.animate({
            opacity: 1
          }, 300)
        });
      });
    } else {
      console.error('Мне нечего отправить в полёт :,(')
      console.log({
        $parent,
        $target,
        $flyElement
      })
    }
  }, 400);
}

/**
 * Кроссбраузерное определение высоты (iOS высчитывает иначе)
 * @returns {Number} Высота окна браузера
 */
const windowHeight = () => Math.max($(window).height(), window.innerHeight);

/**
 * Проверка экрана на альбомную ориентацию
 * @param {String} orientation screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type
 * @returns {Boolean}
 */
const checkScreenIsLandscape = ($orientation) => {
  const orientation = $orientation || screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type

  if (orientation === "landscape-primary") {
    if (screen.orientation.angle === 0) return false  // Если компьютер
    if (screen.orientation.angle === 90) return true  // Если устройство мобильное
  } else if (orientation === "landscape-secondary") {
    return true
  } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
    return false
  } else if (orientation === undefined) {
    console.log("The orientation API isn't supported in this browser :(");
    return true
  }
};

/**
 * Отменяем дефолтный сабмит формы по нажатию Enter
 * и вызываем кастомный обработчик подтверждения формы
 * по клику
 * @param {Event} eventForm
 * @example <form onsubmit="window.triggerClickOfSubmitButton(event)">
 */
const triggerClickOfSubmitButton = (eventForm) => {
  eventForm.preventDefault()
  if (eventForm.keyCode == 13) {
    $(this).find('[type="submit"]').trigger('click')
  }
};

/**
 * Проброс к первому невалидному полю в проекте с фиксированной шапкой
 * @param {Element | String } $submit Форма в которой нужно
 * сфокуссироваться на невалидном поле
 * @param {Function} $callback Дополнительное действие после
 * проброса
 * @example window.focusOnInvalid(event, $('.form'), cb)
 */
function focusOnInvalid(event, $submit, $callback) {
  const _invalidInputs = $($submit).closest('form').find('.is-invalid, input:invalid, textarea:invalid')

  if (_invalidInputs[0]) {
    event.preventDefault()
    const _offset = _invalidInputs.eq(0).offset().top
    const _heightHeader = $('.header__wrapper-global').height()

    const scrollTop = _offset - _heightHeader - 30

    _invalidInputs.eq(0).focus()  // Фокусировка на невалидном поле

    $('body, html').animate({
      scrollTop
    }, 0, $callback)
  }
}

/**
 * Прелоадер
 */
function demoLoader() {
  // Circle progress bar
  const _circleProgress = $('#loader__custom')  // что будет анимироваться
  const _canvas = _circleProgress.find('canvas')
  const imagesCount = document.images.length  // количество изображений
  const percent = 0.9 / imagesCount  // количество % на одно изображение
  let loadedImg = 0  // счетчик загруженных изображений
  let progress = 0  // состояние загрузки

  // Костыль
  // Когда страница загрузилась, скрываем лоадер
  // Изображения из CSS (непонятно как подсчитать)
  window.onload = function() {
    _circleProgress.circleProgress('value', 1)
    setTimeout(() => {
      $('body').removeClass('loading')
    }, 400);
  }

  _circleProgress.circleProgress({
    startAngle: -Math.PI / 2,
    emptyFill: "#ffffff",
    lineCap: 'round',
    value: progress,
    size: 66,
    fill: {
      color: "#d31145"
    },
    thickness: 3
  });
  if (_canvas.getContext) {
    const ctx = _canvas.getContext('2d');
    ctx.shadowColor = "#d31145";
    ctx.shadowBlur = 2;
  }
  
  for (let i = 0; i < imagesCount; i++) { // создаем клоны изображений
    const img_copy = new Image();
    img_copy.src  = document.images[i].src;
    img_copy.onload = img_load;
    img_copy.onerror = img_load;
  }

  // Действие после загрузки каждого изображения
  function img_load () {
    loadedImg++;
    progress += percent;

    _circleProgress.circleProgress('value', progress)
  }
}