export const headerComponent = () => {
  let screenWidth = $(window).width()

  calcPaddingTopPage()

  /* Resize компонента */
  $(window).resize(() => {
    if (screenWidth == $(window).width()) return
    
    screenWidth = $(window).width()

    calcPaddingTopPage()
  })
};

const calcPaddingTopPage = () => {
  $('.main_wrapper_global').css({
    'padding-top': `${$('.header_wrapper_global').outerHeight()}px`
  })
}
