/**
 * Selectize плагин
 */
export const selectInit = () => {
  $('[js-select]').selectize()
};

export const select = {
  reInitSelects: () => {
    $('[js-select]').destroy()
    $('[js-select]').selectize()
    console.log('selectize:[js-select] - перезапущен')
  }
};
