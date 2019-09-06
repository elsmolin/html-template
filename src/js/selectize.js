export const selectizeInit = () => {
  $('.js-selectize').each(function() {
    const selectElement = $(this)

    if (selectElement.hasClass('selectized')) {
      selectElement.destroy()
    }

    selectElement.selectize()
  })
  
  console.info('selectize: .js-selectize - перезапущен')
};
