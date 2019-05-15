/**
 * Нативные формы
 */
export const form = () => {
  $('body').on('click', '[js-clear-input]', function () {
    $(this).parent().find('input, textarea').val(undefined).addClass('is-empty-input')
  })
};

/* Функция для маркировки пустых полей ввода на странице */
export const isEmptyInputFields = () => {
  $('input, textarea').each(function() {
    if (!$(this).val()) {
      $(this).addClass('is-empty-input')
    }
    $(this).on('change keyup', function() {
      if (!$(this).val()) {
        $(this).addClass('is-empty-input')
      } else {
        $(this).removeClass('is-empty-input')
      }
    })
  })
};
