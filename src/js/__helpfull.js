export const _isMobile_ = /Android|webOS|iPhone|iPod|iPad|BlackBerry/.test(navigator.userAgent) && !window.MSStream

const expandBlockClass = '-expanded-'

/**
 * Разворачивание/сворачивание блоков гармошкой
 * @param {ThisType} _this Context
 * @param {Boolean} isReverse Берёт предыдущий элемент, если true
 */
export const expandBlock = (_this, isReverse) => {
  const _btn = $(_this)

  _btn.toggleClass(expandBlockClass)

  if (isReverse) {
    _btn.prev().slideToggle()
  } else {
    _btn.next().slideToggle()
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
      $('[onclick="elijah.expandBlock(this)"]').removeClass(expandBlockClass)
      $('[onclick="elijah.expandBlock(this, true)"]').removeClass(expandBlockClass)

      $('[onclick="elijah.expandBlock(this)"]').next().slideUp()
      $('[onclick="elijah.expandBlock(this, true)"]').prev().slideUp()
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
 */
export const smoothScroll = (event, _this) => {
  event.preventDefault()

  const _anchor = $(_this).attr('href')
  const scrollTop = $(_anchor).offset().top

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