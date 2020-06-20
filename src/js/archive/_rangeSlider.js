export const rangeSliderDefault = () => {
  const _rangeSliderList = $('.js-rangeslider')

  if (_rangeSliderList.length) {
    _rangeSliderList.each(function () {
      const _rangeSlider = $(this)
      const _rangeFromInput = _rangeSlider.closest('.form_range').find('.js-input-from .form_input')
      const _rangeToInput = _rangeSlider.closest('.form_range').find('.js-input-to .form_input')
      const _min = _rangeSlider.data('min')
      const _max = _rangeSlider.data('max')

      _rangeSlider.ionRangeSlider({
        skin: "round",
        grid: true,
        hide_from_to: true,
        hide_min_max: true,
        onStart: function (data) {
          _rangeFromInput.prop("value", data.from);
          if (_rangeToInput.length) {
            _rangeToInput.prop("value", data.to);
          }
        },
        onChange: function (data) {
          _rangeFromInput.prop("value", data.from);
          if (_rangeToInput.length) {
            _rangeToInput.prop("value", data.to);
          }
        }
      })

      const _rangeSliderData = _rangeSlider.data("ionRangeSlider");

      /**
       * Обновление ползунка после изменения значений в инпутах
       */
      _rangeFromInput.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < _min) {
          val = _min;
        } else if (val > _max) {
          val = _max;
        }

        _rangeSliderData.update({
          from: val
        });
      });
      _rangeToInput.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < _min) {
          val = _min;
        } else if (val > _max) {
          val = _max;
        }

        _rangeSliderData.update({
          to: val
        });
      });
    })
  }
};