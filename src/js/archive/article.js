const article = () => {

    $('#journal-slider--nav img').on('click', function() {
      const index = +$(this).attr('data-slider-index');

      $('#journal-slider--nav img').removeClass('active');
      $(this).addClass('active')

      $('#journal-slider').slick('slickGoTo', index);
    })

    $('#journal-slider').slick({
      autoplay: false,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    })

    $('#journal-slider').on('afterChange', function(event, slick, slide) {

      $(`[data-slider-index]`).removeClass('active');
      $(`[data-slider-index="${slide}"]`).addClass('active')
      
    })

}

export default article