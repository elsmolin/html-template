export const selectizeDefault = () => {
  const _selectizeList = $('.js-selectize')

  if (_selectizeList.length) {
    _selectizeList.each(function() {
      const _selectize = $(this)
  
      if (_selectize.hasClass('selectized')) {
        _selectize.destroy()
      }
  
      _selectize.selectize()
    })
  
    console.info('selectize: .js-selectize - перезапущен')
  }
};
