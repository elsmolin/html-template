const orders = () => {

    $('[data-toggle-row]').on('click', function() {
      const section = $(this).next()

      $('[data-toggle-row]').removeClass('show')

      if (section.attr('data-expanded') == 'true') {
        $('[data-expanded="true"]').slideUp().attr('data-expanded', false)
        $(this).removeClass('show');
        
      } else {
        section.slideDown()
        $('[data-expanded="true"]').slideUp().attr('data-expanded', false)
        section.attr('data-expanded', true)
        $(this).addClass('show');
      }
    })
    
}

export default orders