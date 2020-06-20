export const tooltipster = () => {
  // console.log('tooltipster run');
  const _tooltipsterProductList = $('.js-tooltipster-product')
  if (_tooltipsterProductList.length) {
    _tooltipsterProductList.each(function() {
      const _tooltipsterItem = $(this)

      // if (!_tooltipsterItem[0].hasAttribute("title")) return

      _tooltipsterItem.tooltipster({
        // maxWidth: 160,
        contentAsHTML: true,
        interactive: true,
        theme: '-secondary-',
        arrow: false,
        position: 'right',
      })
    })
  }

  const _tooltipsterList = $('.js-tooltipster-category')

  if (_tooltipsterList.length) {
    _tooltipsterList.each(function() {
      const _tooltipsterItem = $(this)

      // if (!_tooltipsterItem[0].hasAttribute("title")) return

      _tooltipsterItem.find('.form_input-label').tooltipster({
        // maxWidth: 200,
        contentAsHTML: true,
        trigger: 'click',
        interactive: true,
        position: $(window).width() < 768 ? 'top' : 'right',
        content: 'Loading...',
        // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
        functionBefore: function(instance, helper) {
            
            var $origin = $(helper.origin);
            
            // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
            if ($origin.data('loaded') !== true) {
    
                $.get('https://jsonplaceholder.typicode.com/todos/1', function(data) {
    
                    // call the 'content' method to update the content of our tooltip with the returned data.
                    // note: this content update will trigger an update animation (see the updateAnimation option)
                    instance.content('найдено: <span>60</span> <button class="btn_custom -primary-" onclick="alert(`show`)">Показать</button>');
    
                    // to remember that the data has been loaded
                    $origin.data('loaded', true);
                });
            }
        }
      })
    })
  }
};