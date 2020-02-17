export const selectizeDefault = () => {
  const _selectizeList = $('select.js-selectize')

  if (_selectizeList.length) {
    _selectizeList.each(function() {
      const _selectizeItem = $(this)

      if (!_selectizeItem.hasClass('selectized')) {
        _selectizeItem.selectize()
      }

    })
  }
};