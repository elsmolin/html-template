/**
 * FancyBox плагин
 */
export const DESKTOP_BREAK_POINT = 1200

export const settingsPopup = {
  default: {
    src  : '#popup_default',
    type : 'inline',
    // touch: {  // Убираем закрытие смахиванием
    //   vertical: false,
    //   momentum: false
    // },
    opts : {
      beforeClose: function( instance, current ) {
        // Чтобы не дергался контент при открытии/закрытии попапа
        // на десктопе для фиксед элементов
        if ($(window).width() >= DESKTOP_BREAK_POINT) {
          $('.body__global').removeClass('compensate-for-scrollbar')
        }
      }
    }
  }
};

export const popup = () => {
  /**
   * @extends [js-call-popup] - Инициализатор
   * @extends [data-popup] - ID попапа
   * @extends [data-popup-type] - Тип попапа. Не обязательно, тогда
   * применятся дефолтные настройки (settingsPopup.default)
   */
  $('body').on('click', '[js-call-popup]', function() {
    const popupType = $(this).data('popup-type') || 'default'
    let curSettings = settingsPopup[popupType]
    if (!curSettings) {
      curSettings = settingsPopup.default
      console.error('Нет таких настроек для попа. Проверьте значение [data-popup-type]. Были применены настройки "default"')
    }
    curSettings.src = $(this).data('popup')

    $.fancybox.open(curSettings)
  })
};

/**
 * Попап вывода сообщения пользователю с выбором действия
 * @param {Object} $message Объект с ключями { title, text }
 * @param {Function} successFunc Callback подтверждения
 * @param {Function} rejectFunc Callback отмены
 */
export const popupMessage = ($message={ title: 'Default title', text: 'Lorem ipsum dolor.'}, successFunc, rejectFunc) => {
  $.fancybox.open({
    src  : '#popup_message',
    type : 'inline',
    touch: {  // Убираем закрытие смахиванием
      vertical: false,
      momentum: false
    },
    opts : {
      beforeShow: function() {
        if (successFunc) {
          $('#popup_message').addClass('show-success')
          $('#popup_message__success').on('click', function() {
            successFunc()
          })
        }
        if (rejectFunc) {
          $('#popup_message').addClass('show-reject')
          $('#popup_message__reject').on('click', function() {
            rejectFunc()
          })
        }
        const { title, text } = $message
        $('#popup_message__title').text(title)
        $('#popup_message__text').text(text)
      },
      beforeClose: function( instance, current ) {
        // Чтобы не дергался контент при открытии/закрытии попапа
        // на десктопе для фиксед элементов
        if ($(window).width() >= DESKTOP_BREAK_POINT) {
          $('.body__global').removeClass('compensate-for-scrollbar')
        }
      },
      afterClose: function() {
        $('#popup_message').removeClass('show-reject show-success')
        $('#popup_message__success').unbind()
        $('#popup_message__reject').unbind()
      }
    }
  })
};