export const tooltipCustomInit = () => {
  const template = 
    '<div class="tooltip tooltip_custom" role="tooltip">' + 
      '<div class="arrow"></div>' + 
      '<div class="tooltip-inner"></div>' + 
    '</div>'

  $('[data-toggle="tooltip_custom"]').tooltip({
    trigger: "hover",
    template
  })
  
  console.info('Tooltip: [data-toggle="tooltip_custom"] - запущен')
};