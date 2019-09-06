export const headerInit = () => {
  /* Отображение мобильного меню */
  $('body').on('click', '.js-menu-toggler', function() {
    $('#header_menu').toggleClass('-show-')
    $('.body_global').toggleClass('-scroll_off-')
  })
};
