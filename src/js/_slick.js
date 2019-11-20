/* Настройки для каруселей */
const _slickSettings = {
  default: {
    centerMode: true,
    infinite: false,
    fade: true,
    adaptiveHeight: true,
  }
}

/**
 * Универсальные настройки для slick
 * Всегда должен быть wrapper и в нем сама карусель
 * @extends [data-slick-nav] - class/id смежной карусели
 * @extends [data-autoplay-speed] - частота смена слайда (ms)
 * @extends [data-slick] - key настроек карусели
 * @extends .js-slick-prev - init стрелки назад, должен быть во wrapper
 * @extends .js-slick-next - init стрелки вперед, должен быть во wrapper
 * @extends .slick_init - скрывает карусель пока не загружен javascript
 * @example <div class="js-slick slick_init" data-slick="default" data-slick-nav=".some-slick" data-autoplay-speed="5000"></div>
 */
export const slickDefault = () => {
  const _slickList = $('.js-slick')

  if (_slickList.length) {
    _slickList.each(function() {
      const _slickItem = $(this)

      if (_slickItem.hasClass('slick-initialized')) return

      const _wrap = _slickItem.parent()
      const _settingKey = _slickItem.data('slick') || "about"
      const _settings = _slickSettings[_settingKey]
      const autoplaySpeed = _slickItem.data('autoplay-speed') || false
      const asNavFor = _slickItem.data('slick-nav') || false
      const prevArrow = _wrap.find('.js-slick-prev')
      const nextArrow = _wrap.find('.js-slick-next')

      if (!_settings) {
        console.error("Неверно указан [data-slick]");
      }
      
      if (autoplaySpeed) {
        _settings.autoplay = true
        _settings.autoplaySpeed = autoplaySpeed
      }
      
      if (asNavFor) {
        _settings.asNavFor = $(asNavFor)
      }

      if (prevArrow.length || nextArrow.length) {
        _settings.prevArrow = prevArrow || false
        _settings.nextArrow = nextArrow || false
      } else {
        _settings.arrows = false
      }

      _slickItem.slick(_settings)
    })

    console.info('SlickCarousel: .js-slick - runned')
  }
}