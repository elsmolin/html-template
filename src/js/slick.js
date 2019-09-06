export const slickMainInit = () => {
  if ($('.js_slick_main')[0]) {
    $('.js_slick_main').each(function () {
      const slickInit = $(this)
      const wrap = slickInit.parent()
      const prevArrow = wrap.find('.slick_btn.-prev-')
      const nextArrow = wrap.find('.slick_btn.-next-')

      slickInit.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow,
        nextArrow,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              variableWidth: true,
              swipeToSlide: true
            }
          }
        ]
      })
    })
  }
};