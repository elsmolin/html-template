import { screenWidth } from './_helpfullJS';


export const main = () => {

  /* Resize компонента main */
  $(window).resize(() => {
    if (screenWidth == $(window).width()) return
    
    screenWidth = $(window).width()

    // ToDo...
  })

  /* Scroll компонента main */
  $(window).scroll(() => {

  })
}
