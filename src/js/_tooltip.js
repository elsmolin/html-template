export const tooltipDefault = () => {
  const _tooltipList = $('[data-toggle="tooltip_default"]')
  const template = 
    '<div class="tooltip tooltip_default" role="tooltip">' + 
      '<div class="arrow"></div>' + 
      '<div class="tooltip-inner"></div>' + 
    '</div>'

  if (_tooltipList.lenght) {
    _tooltipList.each(function() {
      const _tooltip = $(this)

      _tooltip.tooltip({
        trigger: "hover",
        template
      })
    })

    console.info('Tooltip: [data-toggle="tooltip_default"] - runned')
  }
};