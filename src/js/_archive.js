/**
 * Суровый код ждущий своего часа
 */


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