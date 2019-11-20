export const tooltipDefault = () => {
  const template = 
    '<div class="tooltip tooltip_default" role="tooltip">' + 
      '<div class="arrow"></div>' + 
      '<div class="tooltip-inner"></div>' + 
    '</div>'

  $('body').on('mouseenter', '[data-toggle="tooltip_default"]', function() {
    const _tooltip = $(this)

    _tooltip.tooltip({
      trigger: "hover",
      // html: true,
      template,
      // container
    })

    _tooltip.tooltip("show")
  })
};