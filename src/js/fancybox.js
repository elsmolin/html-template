import { _isMobile_ } from './_utils';

export const fancyboxTypes = {
  default: {
    src: '#fancybox_default',
    type: 'inline',
    opts: {
      touch: false,  // Убираем закрытие смахиванием
      beforeClose: function () {
        // Чтобы не дергался контент при открытии/закрытии попапа
        // на десктопе для фиксед элементов
        if (!_isMobile_) {
          $('.body_global').removeClass('compensate-for-scrollbar')
        }
      }
    }
  }
};

export const fancyboxInit = () => {
  /**
   * @extends .js-call-popup - Инициализатор
   * @extends [data-popup] - ID попапа
   * @extends [data-popup-type] - Тип попапа. Не обязательно, тогда
   * применятся дефолтные настройки (fancyboxTypes.default)
   */
  $('body').on('click', '.js-call-popup', function () {
    const currentType = $(this).data('popup-type') || 'default'
    let fancyboxSettings = fancyboxTypes[currentType]

    if (!fancyboxSettings) {
      fancyboxSettings = fancyboxTypes.default
      console.error('Нет таких настроек для попа. Проверьте значение [data-popup-type]. Были применены настройки "default"')
    }

    fancyboxSettings.src = $(this).data('popup')

    $.fancybox.open(fancyboxSettings)
  })
};

/**
 * Попап вывода сообщения пользователю с выбором действия
 * @param {Object} _message Объект с ключями { title, text }
 * @param {Function} _successFunc Callback подтверждения
 * @param {Function} _rejectFunc Callback отмены
 */
export const fancyboxMessage = (_message = { title: 'Default title', text: 'Lorem ipsum dolor.' }, _successFunc, _rejectFunc) => {
  const fancyboxSettings = {
    src: '#fancybox_message',
    type: 'inline',
    opts: {
      touch: false,  // Убираем закрытие смахиванием
      beforeShow: function () {
        const { title, text } = _message

        if (_successFunc) {
          $('#fancybox_message').addClass('-success-')
          $('#fancybox_message-success').on('click', function () {
            _successFunc()
          })
        }
        if (_rejectFunc) {
          $('#fancybox_message').addClass('-reject-')
          $('#fancybox_message-reject').on('click', function () {
            _rejectFunc()
          })
        }

        $('#fancybox_message-title').text(title)
        $('#fancybox_message-text').text(text)
      },
      beforeClose: function () {
        // Чтобы не дергался контент при открытии/закрытии попапа
        // на десктопе для фиксед элементов
        if (!_isMobile_) {
          $('.body_global').removeClass('compensate-for-scrollbar')
        }
      },
      afterClose: function () {
        $('#fancybox_message').removeClass('-reject- -success-')
        $('#fancybox_message-success').unbind()
        $('#fancybox_message-reject').unbind()
      }
    }
  }

  $.fancybox.open(fancyboxSettings)
};