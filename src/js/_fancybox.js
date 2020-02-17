import { _isMobile_ } from './__helpfull';

export const _fancyboxSettings = {
  default(_message, _successFunc, _rejectFunc) {
    return {
      src: '../popup_default.html',
      type: 'ajax',
      opts: {
        touch: false,  // Убираем закрытие смахиванием
        baseClass: 'fancybox_base',
        afterShow: function() {
  
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
          if (_message) {
            const { title, text } = _message
  
            $('#fancybox_message-title').text(title)
            $('#fancybox_message-text').text(text)
          }
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
  }
};

/**
 * @param {Object} _message Объект с ключями { title, text }
 * @param {Function} _successFunc Callback подтверждения
 * @param {Function} _rejectFunc Callback отмены
 * @extends [data-popup] - ID попапа
 * @extends [data-popup-type] - Type попапа
 * @extends [data-popup-setting] - Настройки попапа. Не обязательно, тогда
 * применятся дефолтные настройки (_fancyboxSettings.default)
 */
export const fancyboxDefault = (_this, _message = { title: 'Default title', text: 'Lorem ipsum dolor.'}, _successFunc, _rejectFunc) => {
  const _btn = $(_this)
  const fancyboxSrc = _btn.data('popup')
  const fancyboxType = _btn.data('popup-type') || 'ajax'
  const currentSetting = _btn.data('popup-setting') || 'default'
  let fancyboxSettings = _fancyboxSettings[currentSetting](_message, _successFunc, _rejectFunc)

  if (!fancyboxSettings) {
    fancyboxSettings = _fancyboxSettings.default
    console.error('Нет таких настроек для попа. Проверьте значение [data-popup-setting]. Были применены настройки "default"')
  }

  fancyboxSettings.src = fancyboxSrc
  fancyboxSettings.type = fancyboxType

  $.fancybox.open(fancyboxSettings)
};