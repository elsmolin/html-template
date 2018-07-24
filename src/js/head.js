const mobileWidth = 320;

const head = () => {

    const viewport = $('meta[name="viewport"]');

    if (screen.width < mobileWidth) {
      viewport.attr('content', `width=${mobileWidth}, user-scalable=no`);
    }

    $(window).resize(function() {
      if (screen.width < mobileWidth) {
        viewport.attr('content', `width=${mobileWidth}, user-scalable=no`);
      } else {
        viewport.attr('content', 'width=device-width, initial-scale=1');
      }
    })
    
}

export default head
