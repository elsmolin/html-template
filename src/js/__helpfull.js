export const _isMobile_ = /Android|webOS|iPhone|iPod|iPad|BlackBerry/.test(navigator.userAgent) && !window.MSStream

const expandBlockClass = '-expanded-'

/**
 * Разворачивание/сворачивание блоков гармошкой
 * @param {ThisType} _this Context
 * @param {Number} duration Длительность анимации
 * @extends [data-reverse] Берёт предыдущий элемент, если true
 * @extends [data-target] html элемент
 */
export const expandBlock = (_this, duration) => {
  const _btn = $(_this)
  const _target = _btn.data('target') || false
  const isReverse = _btn.data('reverse') || false

  _btn.toggleClass(expandBlockClass)

  if (_target) {
    $(_target).slideToggle(duration)
  } else if (isReverse) {
    _btn.prev().slideToggle(duration)
  } else {
    _btn.next().slideToggle(duration)
  }
};

/**
 * Сворачивание расктытых блоков
 * с помощью expandBlock() при ресайзе
 */
export const expandBlockResize = () => {
  let sreenWidth = $(window).outerWidth()

  $(window).resize(function () {
    let newSreenWidth = $(window).outerWidth()

    if (sreenWidth === newSreenWidth) return

    if (newSreenWidth < 768) {
      $('[data-expandblock-close-resize]').each(function() {
        const _btn = $(this)
        const _target = _btn.data('target') || false
        const isReverse = _btn.data('reverse') || false
      
        _btn.toggleClass(expandBlockClass)
      
        if (_target) {
          $(_target).slideToggle(0)
        } else if (isReverse) {
          _btn.prev().slideToggle(0)
        } else {
          _btn.next().slideToggle(0)
        }
      })
    }

    sreenWidth = newSreenWidth
  })
};

/**
 * 
 * @extends [data-target] - Класс элементов для показа
 * @extends [data-group] - Класс группы элементов
 * для взаимодействия
 * @param {ThisType} _this Context
 * @example
 * <div>
 *   <button data-group=".group-1" data-target=".target-1" onclick="elijah.toggleBlocks(this)">target-1</button>
 *   <button data-group=".group-1" data-target=".target-2" onclick="elijah.toggleBlocks(this)">target-2</button>
 *   <div class="group-1 target-1"></div>
 *   <div class="group-1 target-1"></div>
 *   <div class="group-1 target-1"></div>
 *   <div class="group-1 target-2"></div>
 *   <div class="group-1 target-2"></div>
 * </div>
 */
export const toggleBlocks = (_this) => {
  const _btn = $(_this)
  const _target = _btn.data('target')
  const _group = _btn.data('group')

  $(`[data-group="${_group}"]`).removeClass('active')
  _btn.addClass('active')

  $(_group).hide()
  $(`${_group}${_target}`).fadeIn()
};

/**
 * Переключение доступности инпутов
 * @extends [data-parent] - Класс супер родителя
 * @param {ThisType} _this Context
 * @example 
 * <div class="form_container">
 *   <label class="form_input-wrapper">
 *     <input type="text"/>
 *   </label>
 *   <button type="button" data-parent=".form_container" onclick="elijah.toggleInputDisabled(this)">Input On/Off</button>
 * </div>
 */
export const toggleInputDisabled = (_this) => {
  const _btn = $(_this)
  const _parent = _btn.data('parent')
  const _wrapper = _btn.closest(_parent)
  const _inputs = _wrapper.find('input')

  _inputs.parent().toggleClass('-like_a_text-')  // Label-обертка инпута
  _inputs.prop('disabled', !_inputs.attr('disabled'))
};

/**
 * Сбрасывает визуально до значения "data-default" 
 * или "value" или null (если не указаны предыдущие)
 * @extends [data-default] - Значение инпута по умолчанию
 * @extends [data-parent] - Класс супер родителя
 * @param {ThisType} _this Context
 * @example 
 * <div class="form_container">
 *   <label class="form_input-wrapper">
 *     <input data-default="value" type="text"/>
 *   </label>
 *   <button type="button" data-parent=".form_container" onclick="elijah.toggleInputReset(this)">Input On/Off</button>
 * </div>
 */
export const toggleInputReset = (_this) => {
  const _btn = $(_this)
  const _parent = _btn.data('parent')
  const _wrapper = _btn.closest(_parent)
  const _inputs = _wrapper.find('input')

  _inputs.each(function () {
    const _input = $(this)
    const _value = _input.data('default') || _input.attr('value') || null

    _input.prop('value', _value)
  })
};

/**
 * Глобальное изменение размера шрифта
 * @param {ThisType} _this Context
 */
export const toggleFontSize = (_this) => {
  const _btn = $(_this)
  const _fontSize = _btn.data('font-size')

  if (_btn.hasClass('active')) {
    $('body, .body_global').removeAttr('style')
    _btn.toggleClass('active')
  } else {
    $('body, .body_global').css({
      'font-size': `${_fontSize}px`
    })
    _btn.toggleClass('active')
  }

  if ($('.js-slick').length) {
    $('.js-slick').slick('refresh')
  }
}

/**
 * Плавный скролл к якорю
 * @param {Event} event 
 * @param {ThisType} _this Context
 * @param {Boolean} isFixedHeader Если .header_wrapper_global position:fixed
 */
export const smoothScroll = (event, _this, isFixedHeader) => {
  event.preventDefault()

  const _anchor = $(_this).attr('href')
  let scrollTop = $(_anchor).offset().top + 20

  if (isFixedHeader) {
    const heightHeader = $('.header_wrapper_global').outerHeight()
    scrollTop += heightHeader
  }

  $('body, html').animate({
    scrollTop
  }, 600)
}

/**
 * Стилизация дерева чекбоксов
 * см. Сара
 */
const treeClass = '.filter-checkbox_list'
const input = 'input[type="checkbox"]'
const inputWrapper = '.custom_item.-checkbox-'

export const indeterminateCheckboxTreeInit = (_this) => {
  $(`${treeClass} ${input}`).change(function () {
    let checked = $(this).prop("checked")
    let container = $(this).parent().parent()

    container.find(input).prop({
      indeterminate: false,
      checked,
    });

    indeterminateCheckSiblings(container, checked)
  });
}

function indeterminateCheckSiblings(el, checked) {
  let parent = el.parent().parent()
  let all = true

  el.siblings().each(function () {
    let returnValue = all = ($(this).children(inputWrapper).find(input).prop("checked") === checked);

    return returnValue;
  });

  if (all && checked) {
    parent.children(inputWrapper).find(input).prop({
      indeterminate: false,
      checked,
    })

    indeterminateCheckSiblings(parent);

  } else if (all && !checked) {
    parent.children(inputWrapper).find(input).prop("checked", checked);
    parent.children(inputWrapper).find(input).prop("indeterminate", (parent.find(`${input}:checked`).length > 0))

    indeterminateCheckSiblings(parent);

  } else {
    el.parents("li").children(inputWrapper).find(input).prop({
      indeterminate: true,
      checked: false
    })
  }
}

/**
 * Генерация рандомного числа
 * @param {Number} max В каком диапазоне от нуля генерировать число
 * @param {Boolean} isPlusOrMinus Генерировать ли отрицательные числа
 */
export const randomValue = (max = 1700, isPlusOrMinus) => {
  if (isPlusOrMinus) {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    max = max * plusOrMinus
  }
  const value = Math.round(Math.random() * max)
  return value
}

/**
 * Генерация цветовой палитры из основных
 * @param {Number} count Кол-во генерируемых цветов
 * @param {Array} colors Список основных цветов в HEX формате
 */
export const generateColorset = (count=6, colors) => {
  const defaultColorset = colors
  const newColorset = []

  if (count > defaultColorset.length) {
    newColorset.push(...defaultColorset)
    count = count - defaultColorset.length + 1  // +1 - компенсация кол-ва цветов
    
    while (count > 0) {
      let _lengthList = newColorset.length
      let _length = count > _lengthList ? _lengthList : count

      for (let i = 1, j = 0; i < _length; i++, j++) {
        const colorHexFirst = newColorset[i + j - 1];
        const colorHexSecond = newColorset[i + j];
        
        // ToDo: new color
        const rgb1 = hexToRgb(colorHexFirst)
        const rgb2 = hexToRgb(colorHexSecond)
        let newR = Math.round((rgb1.r + rgb2.r) * 0.5)
        let newG = Math.round((rgb1.g + rgb2.g) * 0.5)
        let newB = Math.round((rgb1.b + rgb2.b) * 0.5)
        let colorNew = rgbToHex(newR, newG, newB)
        
        newColorset.splice( i + j, 0, colorNew )
      }

      count = count - _lengthList + 1
    }
  } else {
    for (let i = 0; i < count; i++) {
      const color = defaultColorset[i];
      newColorset.push(color)
    }
  }

  return newColorset
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}