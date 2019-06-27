/**
 * Шапка
 */
export const headerInit = () => {
  /* Отображение мобильного меню */
  $('body').on('click', '[js-mobile-menu-toggler]', function() {
    $('#header_mobile_menu').toggleClass('customshow')
    $('.body_global').toggleClass('scroll-disabled')
  })
};
