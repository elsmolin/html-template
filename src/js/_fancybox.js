import { _isMobile_ } from './__helpfull';

export const _fancyboxSettings = {
  default(_message) {
    return {
      src: '../popup_default.html',
      type: 'ajax',
      opts: {
        touch: false,  // Убираем закрытие смахиванием
        baseClass: 'fancybox_base',
        afterShow: function() {
  
          $('.body_global').addClass('-scroll_off-')
  
          if (_message) {
            const {
              title,
              text,
              successFunc,
              rejectFunc,
              successText,
              rejectText,
            } = _message
  
            $('.js-fancybox-title').text(title)
            $('.js-fancybox-text').text(text)

            if (successFunc) {
              $('.js-fancybox').addClass('-success-')
              $('.js-fancybox-success')
                .text(successText)
                .on('click', function () {
                  successFunc()
                })
            }
            if (rejectFunc) {
              $('.js-fancybox').addClass('-reject-')
              $('.js-fancybox-reject')
                .text(rejectText)
                .on('click', function () {
                  rejectFunc()
                })
            }
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
          $('.js-fancybox').removeClass('-reject- -success-')
          $('.js-fancybox-success').unbind()
          $('.js-fancybox-reject').unbind()
        }
      }
    }
  }
};

/**
 * @param {Element} _this Строка или jQuery объект 
 * @param {Object} _messageData Объект с ключями 
 * { title, text, successFunc, successText, rejectFunc, rejectText }
 * @param {Object} _settings Объект настроек попапа, переопределяет совпавшие 
 * @extends [data-popup] - ID попапа
 * @extends [data-popup-type] - Type попапа
 * @extends [data-popup-setting] - Настройки попапа. Не обязательно, тогда
 * применятся дефолтные настройки (_fancyboxSettings.default)
 */
export const fancyboxDefault = (
  _this,
  _messageData = {
    title: 'Пример заголовка',
    text: 'Пример описания. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, aliquid!',
    successFunc: function() {
      alert('successFunc Run')
    },
    successText: 'ДА',
    rejectFunc: function() {
      alert('rejectFunc Run')
    },
    rejectText: 'НЕТ',
  },
  _settings=false,
) => {
  const _btn = $(_this)
  const fancyboxSrc = _btn.data('popup')
  const fancyboxType = _btn.data('popup-type') || 'ajax'
  const currentSetting = _btn.data('popup-setting') || 'default'
  let fancyboxSettings = _fancyboxSettings[currentSetting](_messageData)

  if (!fancyboxSettings) {
    fancyboxSettings = _fancyboxSettings.default
    console.error('Нет таких настроек для попа. Проверьте значение [data-popup-setting]. Были применены настройки "default"')
  }

  if (_settings) {
    fancyboxSettings = Object.assign({}, fancyboxSettings, _settings)
    fancyboxSettings.src = fancyboxSrc
    fancyboxSettings.type = fancyboxType
  } else {
    fancyboxSettings.src = fancyboxSrc
    fancyboxSettings.type = fancyboxType
  }

  $.fancybox.open(fancyboxSettings)
};