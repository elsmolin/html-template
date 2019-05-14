/**
 * Bootstrap 4: Tooltip
 */
export const tooltip = () => {
  let screenWidth = $(window).width()

  $('[data-toggle="tooltip_custom"]').tooltip({
    trigger: "hover",
    template: '<div class="tooltip tooltip_custom" role="tooltip"><div class="tooltip-inner"></div></div>'
  })

  /* Resize компонента tooltip */
  $(window).resize(function() {
    if (screenWidth == $(window).width()) return
    
    screenWidth = $(window).width()

    reInitTooltipCustom()
  })
};

export const reInitTooltipCustom = () => {
  $('[data-toggle="tooltip_custom"]').tooltip('dispose')
  $('[data-toggle="tooltip_custom"]').tooltip({
    trigger: "hover",
    template: '<div class="tooltip tooltip__custom" role="tooltip"><div class="tooltip-inner"></div></div>'
  })
};
