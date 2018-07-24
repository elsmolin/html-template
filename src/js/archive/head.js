// import $ from 'jquery';

const head = () => {

    const viewport = $('meta[name="viewport"]');

    if (screen.width < 320) {
      viewport.attr('content', 'width=320, user-scalable=no');
    }

    $(window).resize(function() {
      if (screen.width < 320) {
        viewport.attr('content', 'width=320, user-scalable=no');
      } else {
        viewport.attr('content', 'width=device-width, initial-scale=1');
      }
    })

    // всплывашки от бутстрапа
    $('[data-toggle="tooltip"]').tooltip({
      // template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      // trigger: 'click',
      placement: 'right'
    })
    
    $('[data-toggle="validTooltip"]').tooltip({
      template: `
        <div class="tooltip tooltip-success" role="tooltip">
          <div class="arrow"></div>
          <div class="tooltip-inner"></div>
        </div>
      `,
      // trigger: 'click',
      placement: 'left'
    })

    $('[data-toggle="invalidTooltip"]').tooltip({
      template: `
        <div class="tooltip tooltip-error" role="tooltip">
          <div class="arrow"></div>
          <div class="tooltip-inner"></div>
        </div>
      `,
      // trigger: 'click',
      placement: 'left'
    })
    // $('[data-toggle="tooltip"]').on('click', function() {
    //   $(this).tooltip('show')
    // })
    
}

export default head
