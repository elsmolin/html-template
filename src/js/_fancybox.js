import { _isMobile_ } from './__helpfull';

export const _fancyboxSettings = {
  default: {
    src: '../popup_default.html',
    type: 'ajax',
    opts: {
      touch: false,  // Убираем закрытие смахиванием
      baseClass: 'fancybox_base',
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
export const fancyboxMessage = (_this, _message = { title: 'Default title', text: 'Lorem ipsum dolor.'}, _successFunc, _rejectFunc) => {
  const _btn = $(_this)
  const fancyboxSrc = _btn.data('popup')

  const fancyboxSettings = {
    src: fancyboxSrc,
    type: 'ajax',
    opts: {
      touch: false,  // Убираем закрытие смахиванием
      baseClass: 'fancybox_base',
      afterShow: function() {
        const { title, text } = _message

        $('.body_global').addClass('-scroll_off-')

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
        $('#fancybox_message').removeClass('-reject- -success-')
        $('#fancybox_message-success').unbind()
        $('#fancybox_message-reject').unbind()
      }
    }
  }

  $.fancybox.open(fancyboxSettings)
};