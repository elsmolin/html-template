export const markEmptyFields = (_this) => {
  const input = $(_this)
  
  if (input.val()) {
    input.removeClass('-is-empty-')
  } else {
    input.addClass('-is-empty-')
  }
};

export const updFileInput = (_this) => {
  const input = $(_this)

  if (input.attr('type') === 'file') {
    const _wrap = input.parent()
    const filename = input[0].files.length ? input[0].files[0].name : null
    const defaultText = _wrap.find('.custom_item-label .custom_item-text').text()
    
    if (filename) {
      _wrap.find('.custom_item-value .custom_item-text').text(filename)
    } else {
      _wrap.find('.custom_item-value .custom_item-text').text(defaultText)
    }
  }
}

export const inputCode = () => {
  $('body').on('paste', '.js-input-code', function(event) {
    let _input = $(this)
    const pastedData = event.originalEvent.clipboardData.getData('text');
    const pastedDataArray = pastedData.split('')
    
    for (let char of pastedDataArray) {
      _input.val(char)

      if (_input.next().length !== 0) {
        _input.next().focus()
        _input = _input.next()
      } else {
        break;
      }
    }
  })

  $('body').on('click', '.js-input-code', function() {
    const _input = $(this)

    if (_input.val()) {
      const _inputList = _input.parent().find('.js-input-code')
      const maxIndex = _inputList.length - 1
      const _last = $('.js-input-code').eq(maxIndex)

      if (_last.val()) {
        _last.focus()
      } else {
        _last.trigger('click')
      }
    } else {
      checkInputValue(_input)
    }
  })

  $('body').on('change keydown', '.js-input-code', function() {
    const _input = $(this)

    if (_input.val().toString().length) {
      if (_input.next().length) {
        _input.next().focus()
      }
    } else {
      if (_input.prev().length) {
        _input.prev().focus()
      }
    }
  })

  function checkInputValue(_input) {
    if (!_input.val()) {
      if (_input.prev().length) {
        _input.prev().focus()

        checkInputValue(_input.prev())
      }
    }
  }
}