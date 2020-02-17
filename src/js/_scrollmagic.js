const windowHeight = () => Math.max($(window).height(), window.innerHeight);

export const scrollmagicMagazine = () => {
  const _scrollmagicMagazineList = $('.js-scrollmagic-magazine')

  if (_scrollmagicMagazineList.length) {
    _scrollmagicMagazineList.each(function() {
      const controller = new ScrollMagic.Controller();
      const _scrollmagicMagazineItem = $(this)
      const _wrapper = _scrollmagicMagazineItem.parent()
      const triggerHook = 24 / windowHeight()
      const duration = _wrapper.height() - _scrollmagicMagazineItem.outerHeight()
      
      new ScrollMagic.Scene({
        triggerElement: _wrapper,
        duration,
        triggerHook
      })
        .addTo(controller)
        .on("progress", function (e) {
          if ($(window).width() < 1200) return

          const progress = parseFloat(e.progress.toFixed(5))

          _scrollmagicMagazineItem.css({
            'transform': `translateY(${progress * duration}px)`
          })
        });
    })
  }
};

export const scrollmagicAnimation = () => {
  const scrollmagicAnimationList = $('.js-scrollmagic-animation')
  
  if (scrollmagicAnimationList.length) {
    scrollmagicAnimationList.each(function() {
      const controller = new ScrollMagic.Controller();
      const scrollmagicAnimationItem = $(this)
      const _wrapper = $('.main_wrapper_global')
      const triggerHook = .68
      const duration = _wrapper.outerHeight()
      
      new ScrollMagic.Scene({
        triggerElement: scrollmagicAnimationItem,
        duration,
        triggerHook
      })
        .addTo(controller)
        .on("enter leave", function (e) {
          if (e.type == "enter") {
            scrollmagicAnimationItem.addClass('show')
          }
        });
    })
  }
};