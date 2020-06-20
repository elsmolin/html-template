export const scrollbarDefault = () => {
  const _scrollbarList = $('.js-scrollbar')

  if (_scrollbarList.length) {
    _scrollbarList.each(function () {
      const _scrollbarItem = $(this)

      _scrollbarItem.mCustomScrollbar({
        axis: 'x',
        advanced: {
          autoScrollOnFocus: false,
          updateOnContentResize: true,
          updateOnBrowserResize: true
        },
        autoHideScrollbar: true,
        autoExpandScrollbar: true,
        scrollbarPosition: "outside",
        scrollInertia: 400,
        callbacks: {
          onInit: function () {
            setTimeout(function () {
              const centerScrollbar = _scrollbarItem.outerWidth() * .5
              const item = $('.subheader_item-link.active')
              const wrap = item.length ? item.parent() : false

              if (!wrap) return

              const itemHalf = item.outerWidth() * .5
              const itemOffset = item.position().left
              let moveLeft = itemOffset - centerScrollbar + itemHalf
  
              if (moveLeft < 0) {
                moveLeft = 0
              }
  
              _scrollbarItem.mCustomScrollbar('scrollTo', moveLeft);
            }, 400);
          }
        }
        // scrollButtons:{
        //   enable: true
        // },
      })
    })
  }
};