const headerMenu = (w) => {
  w = $( window ).width();

  // hide/show submenu--city
  $('[data-dc-toggle]').on('click', function() {
    const id = $(this).attr('data-dc-toggle');
    $(id).slideToggle();
  })

  // mobile menu
  if (window.innerWidth < 1200) {
    activateMobileButton()
  }
  
  // init menu sliders
  $('.global-menu--slider .slider').slick({
    autoplay: false,
    dots: true,
    infinite: false,
    // dotsClass: 'slider--dots',
    slidesToShow: 1,
    arrows: false,
    // mobileFirst: true,
    // fade: true,
    variableWidth: true,
    responsive: [{

      breakpoint: 0,
      settings: {
        unslick: true
      }

    },{

      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }

    }]
    // prevArrow: $(`.btn-slider-prev#promo`),
    // nextArrow: $(`.btn-slider-next#promo`),
  })

  $(window).resize(function() {
    if ($(window).width() == w) return;
    w = $(window).width();

    $('.show').removeClass('show')
    // $('#dropdownMenuButton').dropdown('dispose')
    $('[data-mobile="menu"]').unbind()
    $('.global-menu .list-inline-item').unbind()
    $('#dl-search').removeClass('dl-delet')
    $('#dl-search').addClass('dl-search')
    $('[data-mobile="menu"]').removeClass('dl-delet')
    $('[data-mobile="menu"]').addClass('dl-menu')
    resetMenu()

    if (window.innerWidth < 1200) {
      activateMobileButton()
    }
    if (window.innerWidth >= 1200) {

      $('.global-menu .list-inline-item').each(function() {
        const linkLeft = $(this).position().left
        if (linkLeft > 1200 - 662) {
          $(this).children('ul').css({
            right: 0,
          })
        }
      })

      $('#dropdownMenuButton').attr({
        'data-toggle': 'dropdown',
        'aria-expanded': false,
        'data-mobile': null
      })
      $('#dropdownMenuButton + .dropdown-menu').attr('aria-labelledby', 'dropdownMenuButton')
    }
  })

  $('.global-menu .list-inline-item').each(function() {
    const linkLeft = $(this).position().left
    if (linkLeft > 1200 - 662) {
      $(this).children('ul').css({
        right: 0,
      })
    }
  })
  
  const globalMenu = $('.global-menu')
  const menuLeft = $('.global-menu').position().left
  const cloneGlobalMenu = globalMenu.clone()
  cloneGlobalMenu.addClass('global-menu--dropdown')
  cloneGlobalMenu.removeClass('global-menu')
  cloneGlobalMenu.attr('id', 'global-menu--dropdown')
  cloneGlobalMenu.find('.global-menu--slider').remove()
  
  $('#setMenuHere').replaceWith(cloneGlobalMenu)
  // cloneGlobalMenu.toggleClass('global-menu global-menu--dropdown')
  $('.global-menu .list-inline-item').children('a').attr('href', null)
  // $('.global-menu ul').css({
  //   'display': 'none'
  // }).closest('li').attr('data-dropdown-menu', false)
  $('.global-menu--dropdown ul').closest('li').children('a').attr('href', null)
  $('.global-menu--dropdown ul').css({
    'display': 'none'
  }).closest('li').attr('data-dropdown-menu', false)

  $('[data-dropdown-menu] > a').on('click', function() {
    const parent = $(this).closest('[data-dropdown-menu]')
    const isOpened = parent.attr('data-dropdown-menu');

    if (isOpened == 'true') {
      parent.find('ul').slideUp()
      parent.find('[data-dropdown-menu]').attr('data-dropdown-menu', false)
      parent.attr('data-dropdown-menu', false)
      parent.find('i').removeClass('dl-arrow-up')
      parent.find('i').addClass('dl-arrow-down')
    } else {
      parent.closest('ul').find('ul').slideUp()
      parent.closest('ul').find('i').removeClass('dl-arrow-up')
      parent.closest('ul').find('i').addClass('dl-arrow-down')
      parent.closest('ul').find('[data-dropdown-menu]').attr('data-dropdown-menu', false)
      $(this).next('ul').slideToggle();
      parent.attr('data-dropdown-menu', true)
      parent.children('i').removeClass('dl-arrow-down')
      parent.children('i').addClass('dl-arrow-up')
    }
  })

  // search
  $('#dl-search').on('click', function() {
    $(this).toggleClass('dl-search dl-delet')
    $('#navbar-search-form').toggleClass('show')
    $('body').removeClass('show')
    $('.global-menu--wrapper').removeClass('show');
    $('[data-mobile="menu"]').removeClass('show dl-delet');
    $('[data-mobile="menu"]').addClass('dl-menu');
    resetMenu()
  })

  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

  $( "#navbar-search-form .result" )
    // don't navigate away from the field on tab when selecting an item
    .on( "keydown", function( event ) {
      if ( event.keyCode === $.ui.keyCode.TAB &&
          $( this ).autocomplete( "instance" ).menu.active ) {
        event.preventDefault();
      }
    })
    .autocomplete({
      minLength: 0,
      source: function( request, response ) {
        // delegate back to autocomplete, but extract the last term
        response( $.ui.autocomplete.filter(
          availableTags, extractLast( request.term ) ) );
      },
      focus: function() {
        // prevent value inserted on focus
        return false;
      },
      select: function( event, ui ) {
        var terms = split( this.value );
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push( ui.item.value );
        // add placeholder to get the comma-and-space at the end
        terms.push( "" );
        this.value = terms.join( ", " );
        return false;
      }
    });
}

// help function for mobile menu
const activateMobileButton = () => {
  // $('#dropdownMenuButton').attr({
  //   'data-toggle': null,
  //   'aria-expanded': null,
  //   'data-mobile': 'menu'
  // })
  // $('#dropdownMenuButton + .dropdown-menu').attr('aria-labelledby', null)
  $('[data-mobile="menu"]').on('click', function() {
    $(this).toggleClass('show dl-menu dl-delet')
    $('.global-menu--wrapper').toggleClass('show');
    // $('body').toggleClass('show')
    resetMenu()
    
    $('#dl-search').removeClass('dl-delet')
    $('#dl-search').addClass('dl-search')
    $('#navbar-search-form').removeClass('show')
  })

  $('.global-menu .list-inline-item').on('click', function() {
    const index = $(this).index();

    if($('.global-menu--wrapper .list-inline-item').eq(index).attr('data-dropdown-menu') == 'true') return;

    if(!$('.global-menu--wrapper').hasClass('show')) {
      $('.global-menu--wrapper').toggleClass('show');
      $('[data-mobile="menu"]').toggleClass('show dl-menu dl-delet')
    }
    
    resetMenu()

    const item = $('.global-menu--wrapper .list-inline-item').eq(index)
    item.children('ul').slideDown()
    item.children('i').addClass('dl-arrow-up')
    item.children('i').removeClass('dl-arrow-down')
    item.attr('data-dropdown-menu', true)
  })
}

const resetMenu = () => {
  $('[data-dropdown-menu]').attr('data-dropdown-menu', false)
  $('.global-menu--wrapper .dl-arrow-up').toggleClass('dl-arrow-up dl-arrow-down')
  $('.global-menu--wrapper [style]').slideUp();
}

// help functions for search
const split = ( val ) => val.split( /,\s*/ );
const extractLast = ( term ) => split( term ).pop();

export default headerMenu
