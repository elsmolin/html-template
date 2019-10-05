import { _isMobile_ } from './__helpfull';

export const _fancyboxSettings = {
  default: {
    src: '#fancybox_default',
    type: 'inline',
    opts: {
      touch: false,  // Убираем закрытие смахиванием
      afterShow: function() {
        $('.body_global').addClass('-scroll_off-')
      },
      beforeClose: function () {
        $('.body_global').removeClass('-scroll_off-')
        // Чтобы не дергался контент при открытии/закрытии попапа
        // на десктопе для фиксед элементов
        if (!_isMobile_) {
          $('.body_global').removeClass('compensate-for-scrollbar')
        }
      }
    }
  }
};

/**
 * @extends [data-popup] - ID попапа
 * @extends [data-popup-setting] - Настройки попапа. Не обязательно, тогда
 * применятся дефолтные настройки (_fancyboxSettings.default)
 */
export const fancyboxDefault = (_this) => {
  const _btn = $(_this)
  const fancyboxSrc = _btn.data('popup')
  const currentSetting = _btn.data('popup-setting') || 'default'
  let fancyboxSettings = _fancyboxSettings[currentSetting]

  if (!fancyboxSettings) {
    fancyboxSettings = _fancyboxSettings.default
    console.error('Нет таких настроек для попа. Проверьте значение [data-popup-setting]. Были применены настройки "default"')
  }

  fancyboxSettings.src = fancyboxSrc

  $.fancybox.open(fancyboxSettings)
};

/**
 * Попап вывода сообщения пользователю с выбором действия
 * @param {Object} _message Объект с ключями { title, text, extendClass }
 * @param {Function} _successFunc Callback подтверждения
 * @param {Function} _rejectFunc Callback отмены
 */
export const fancyboxMessage = (_message = { title: 'Default title', text: 'Lorem ipsum dolor.', extendClass: undefined  }, _successFunc, _rejectFunc) => {
  const fancyboxSettings = {
    src: '#fancybox_message',
    type: 'inline',
    opts: {
      touch: false,  // Убираем закрытие смахиванием
      afterShow: function() {
        $('.body_global').addClass('-scroll_off-')
      },
      beforeShow: function () {
        const { title, text, extendClass } = _message

        if (extendClass) {
          $('#fancybox_message').addClass(extendClass)
        }

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
        $('.body_global').removeClass('-scroll_off-')
        // Чтобы не дергался контент при открытии/закрытии попапа
        // на десктопе для фиксед элементов
        if (!_isMobile_) {
          $('.body_global').removeClass('compensate-for-scrollbar')
        }
      },
      afterClose: function () {
        const { extendClass } = _message
        
        $('#fancybox_message').removeClass(extendClass)
        $('#fancybox_message').removeClass('-reject- -success-')
        $('#fancybox_message-success').unbind()
        $('#fancybox_message-reject').unbind()
      }
    }
  }

  $.fancybox.open(fancyboxSettings)
};