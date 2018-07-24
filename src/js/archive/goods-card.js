const goodsCard = () => {

    $('.btn[data-value]').on('click', function() {
      $('.btn[data-value]').removeClass('current');
      $(this).addClass('current');
      $('.btn-group[data-current]').attr('data-current', $(this).attr('data-value'))
    })

    $('[aria-labelledby] .dropdown-item').on('click', function() {
      const value = `${$(this).attr('data-value')} ₽`
      const text = $(this).text()
      const id = $(this).closest('[aria-labelledby]').attr('aria-labelledby')
      
      $(`#${id} .select`).text(text);
      $('.dropdown .price').text(value);
    })
    
}

export default goodsCard