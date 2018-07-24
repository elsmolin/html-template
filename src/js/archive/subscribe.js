const subscribe = () => {

    $('[aria-labelledby="title-input"] .dropdown-item').on('click', function() {
      const text = $(this).text()

      $('#title-input input').attr('value', text).val(text);
      $('#title-input span').text(text);

    })
    
}

export default subscribe