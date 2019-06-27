/**
 * Главная страница
 */
export const mainInit = () => {
  let screenWidth = $(window).width()

  /* Resize компонента main */
  $(window).resize(() => {
    if (screenWidth == $(window).width()) return
    
    screenWidth = $(window).width()

    // ToDo...
  })

  /* Scroll компонента main */
  $(window).scroll(() => {

  })
};
