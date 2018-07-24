const header = () => {
  
    $(window).scroll(function() {
      if(window.pageYOffset > 55) {
        $('nav.header').addClass('fixed')
        $('nav.header-submenu').addClass('fixed')
      } else {
        $('nav.header').removeClass('fixed')
        $('nav.header-submenu').removeClass('fixed')
      }
    })

    if(window.innerWidth < 1200) {
      $('[form="search-form"]').attr('data-fancybox', '')
      $('[form="search-form"]').attr('data-src', "#search-popup");
    } else {
      $('[form="search-form"]').attr('data-fancybox', null)
      $('[form="search-form"]').attr('data-src', null);
    }

    $(window).resize(function() {
      if(window.innerWidth < 1200) {
        $('[form="search-form"]').attr('data-fancybox', '')
        $('[form="search-form"]').attr('data-src', "#search-popup");
      } else {
        $('[form="search-form"]').attr('data-fancybox', null)
        $('[form="search-form"]').attr('data-src', null);
      }
    })
    
}

export default header
