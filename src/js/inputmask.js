import { filterPhoneNumber } from './_helpfullJS';


export const inputmask = () => {
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
}

export const reInitInputMask = () => {
  $('[type="tel"]').inputmask('remove').val('');
  inputmask()
}