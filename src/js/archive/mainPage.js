export const mainPage = () => {
  let screenWidth = $(window).width()

  /* Resize компонента */
  $(window).resize(() => {
    if (screenWidth == $(window).width()) return
    
    screenWidth = $(window).width()

    // ToDo...
  })

  /* Scroll компонента */
  $(window).scroll(() => {

  })
};
