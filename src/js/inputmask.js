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


export const inputmaskInit = () => {
  $('[type="tel"]').inputmask({
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
};

export const inputMask = {
  reInitInputMask: () => {
    $('[type="tel"]').inputmask('remove').val('');
    inputmaskInit()
    console.log('inputMask:[type="tel"] - перезапущен')
  }
}