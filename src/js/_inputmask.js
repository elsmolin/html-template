/**
 * InputMask плагин
 */
/* RegExp */
const regexNumberOnly = /\d+/g;

/**
 * @description Вырезает все символы кроме цифр и возвращает последние
 * <phoneLength - 1> цифр
 * @param {String} inputValue Значение инпута
 * @param {Number} phoneLength Кол-во цифр необходимых для вставки.
 * Зависит от маски
 * @default phoneLength 10
 */
const filterPhoneNumber = (inputValue, phoneLength=10) => {
  const numbers = inputValue.trim().match(regexNumberOnly).join('')
  const startIndex = numbers.length - phoneLength
  const value = numbers.slice(startIndex, numbers.length)
  return value
};

export const inputmaskPhone = () => {
  const _inputmaskList = $('[type="tel"]')

  if (_inputmaskList.length) {
    _inputmaskList.each(function() {
      const _inputmask = $(this)

      _inputmask.inputmask({
        mask: "+7 (999) 999-99-99",
        onBeforeMask(initialValue) {
          if (initialValue.length < 10) return
          return filterPhoneNumber(initialValue)
        },
        onBeforePaste(pastedValue) {
          if (pastedValue.length < 10) return
          return filterPhoneNumber(pastedValue)
        }
      })
    })

    console.info('inputMask: [type="tel"] - runned')
  }
};