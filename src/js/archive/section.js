const section = () => {

  const rangeSlider = $('[data-range]');

  $('#promo-slider').slick({
    autoplay: false,
    dots: true,
    dotsClass: 'dots-slider',
    slidesToShow: 1,
    prevArrow: $(`.btn-slider-prev#promo`),
    nextArrow: $(`.btn-slider-next#promo`),
  })

  // ---jQuery slider--- //

  /**
   * Init slider
   */
  rangeSlider.slider({
    range: true,
    min: parseInt(rangeSlider.attr('data-min')),
    max: parseInt(rangeSlider.attr('data-max')),
    values: [
      parseInt(rangeSlider.attr('data-min')),
      parseInt(rangeSlider.attr('data-max'))    
    ],
    slide: function( event, ui ) {
      const currentRange = event.target;
      const inputMin = $(currentRange).closest('.right').find('[name="min"]');
      const inputMax = $(currentRange).closest('.right').find('[name="max"]');
      const min = ui.values[ 0 ]
      const max = ui.values[ 1 ]

      inputMin.val(min)
      inputMax.val(max)
    }
  });

  /**
   * Init values
   */
  rangeSlider.each(function() {
    const min = parseInt($(this).attr('data-min'));
    const max = parseInt($(this).attr('data-max'));
    const inputMin = $(this).closest('.right').find('[name="min"]');
    const inputMax = $(this).closest('.right').find('[name="max"]');
    // const labelMin = $(this).closest('.right').find('.min');
    // const labelMax = $(this).closest('.right').find('.max');

    // input's min & max
    inputMin.attr('min', min);
    inputMin.attr('max', max);
    inputMax.attr('min', min);
    inputMax.attr('max', max);

    // input's value
    inputMin.val(min)
    inputMax.val(max)

    // label's value
    // labelMin.text(`${min} Р.`)
    // labelMax.text(`${max} Р.`)
    
    /**
     * Adding handles
     */
    inputMin.on('keyup', updSlider)
    inputMax.on('keyup', updSlider)
    inputMin.change(updSlider)
    inputMax.change(updSlider)
  })
    

  const updSlider = (e) => {
    const that = e.target
    const slider = $(that).closest('.right').find('[data-range]');
    const maxAvaliable = parseInt(slider.attr('data-max'));
    const minAvaliable = parseInt(slider.attr('data-min'));
    let min = parseInt($(that).closest('.right').find('[name="min"]').val()) || 0;
    let max = parseInt($(that).closest('.right').find('[name="max"]').val()) || 0;

    max = max > maxAvaliable ? maxAvaliable : max;
    min = min < minAvaliable ? minAvaliable : min;

    slider.slider('option', 'values', [min, max]);
  }
}

export default section
