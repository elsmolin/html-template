export let screenWidth = $(window).width()
// Кроссбраузерное определение высоты (iOS высчитывает иначе)
export let windowHeight = Math.max($(window).height(), window.innerHeight)

/* RegExp */
export const regexNumberOnly = /\d+/g

/* Настройки для попапов */
export const settingsPopup = {
  default: {
    src  : '#popup_default',
    type : 'inline',
    // touch: {  // Убираем закрытие смахиванием
    //   vertical: false,
    //   momentum: false
    // },
    // opts : {
    //   beforeShow: function() {
    //     // ToDo...
    //   },
    // }
  }
}


/**
 * Вырезает все символы кроме цифр и возвращает последние
 * <phoneLength> цифр
 * @param {String} inputValue Значение инпута
 * @param {Number} phoneLength Длина телефонного номера
 * @default phoneLength 10
 */
export const filterPhoneNumber = (inputValue, phoneLength=10) => {
  const numbers = inputValue.trim().match(regexNumberOnly).join('')
  const startIndex = numbers.length - phoneLength
  const value = numbers.slice(startIndex, numbers.length)
  return value
}

/**
 * Проверка экрана на альбомную ориентацию
 * @param {String} orientation screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type
 * @returns {Boolean}
 */
export const checkScreenIsLandscape = (orientation) => {
  const orientation = orientation || screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type

  if (orientation === "landscape-primary") {
    if (screen.orientation.angle === 0) return false  // Если компьютер
    if (screen.orientation.angle === 90) return true  // Если устройство мобильное
  } else if (orientation === "landscape-secondary") {
    return true
  } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
    return false
  } else if (orientation === undefined) {
    console.log("The orientation API isn't supported in this browser :(");
    return true
  }
}

/**
 * Отменяем дефолтный сабмит формы по нажатию Enter
 * и вызываем кастомный обработчик подтверждения формы
 * по клику
 * @param {Event} eventForm
 * @example <form onsubmit="window.triggerClickOfSubmitButton(event)">
 */
export const triggerClickOfSubmitButton = (eventForm) => {
  eventForm.preventDefault()
  if (eventForm.keyCode == 13) {
    $(this).find('[type="submit"]').trigger('click')
  }
}