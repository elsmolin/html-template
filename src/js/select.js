/**
 * Selectize плагин
 */
export const select = () => {
  $('[js-select]').selectize()
};

export const reInitSelects = () => {
  $('[js-select]').destroy()
  $('[js-select]').selectize()
};
