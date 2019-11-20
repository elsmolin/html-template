export const datepickerDefault = () => {
  const _datepickerList = $('.js-datepicker')
  if (_datepickerList.length) {
    _datepickerList.each(function() {
      const _datepickerItem = $(this)

      _datepickerItem.datepicker()
    })
  }
};