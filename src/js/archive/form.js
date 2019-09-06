export const formInit = () => {
  $('body').on('click', '.js-clear-input', function () {
    $(this).parent().find('input, textarea').val(undefined).addClass('is-empty-input')
  })
};

export const form = {
  /* Функция для маркировки пустых полей ввода на странице */
  markEmptyInput: () => {
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
    console.info("$('input, textarea') Маркировка пустых полей ввода на странице выполнена")
  }
}
