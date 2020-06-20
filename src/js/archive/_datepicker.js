export const datepickerDefault = () => {
  const _datepickerList = $('.js-datepicker')

  if (_datepickerList.length) {
    _datepickerList.each(function() {
      const _datepickerItem = $(this)
      const position = _datepickerItem.data('position') || 'bottom left'

      const myDataPicker = _datepickerItem.datepicker({
        position: "bottom right",
        autoClose: true,
        position,
        onShow() {
          _datepickerItem.addClass('-datepicker_opened-')
        },
        onHide() {
          _datepickerItem.removeClass('-datepicker_opened-')
        }
      }).data('datepicker')

      if (_datepickerItem.val()) {
        myDataPicker.selectDate(new Date(_datepickerItem.val()))
      }
      
      $('body, html, .fancybox-slide').scroll(function() {
        _datepickerItem.data('datepicker').update()
      })
    })
  }
};