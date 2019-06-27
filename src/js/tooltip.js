/**
 * Bootstrap 4: Tooltip
 */
export const tooltipInit = () => {
  let screenWidth = $(window).width()

  initTooltipCustom()

  /* Resize компонента tooltip */
  $(window).resize(function() {
    if (screenWidth == $(window).width()) return
    
    screenWidth = $(window).width()

    initTooltipCustom()
  })
};

const initTooltipCustom = () => {
  $('[data-toggle="tooltip_custom"]').tooltip({
    trigger: "hover",
    template: '<div class="tooltip tooltip__custom" role="tooltip"><div class="tooltip-inner"></div></div>'
  })
  console.log('Tooltip:[data-toggle="tooltip_custom"] - перезапущен')
};

export const tooltip = {
  initTooltipCustom
}