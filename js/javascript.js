

// Detect touch device
const isTouch = 'ontouchstart' in document
const noTouch = !isTouch

function isMobile () {
  if (!$('#bp').length) {
    $('<div id=bp></div>').appendTo('body')
  }
  return $('#bp').width() == 1
}

function sideItemPosition () {
  $('.js-side-item-position').each(function () {
    const sideItem = $(this)
    const mainItem = sideItem.closest('.page-column').find('.js-main-item-position[data-id="' + sideItem.data('id') + '"]')

    if(mainItem.length){
    	let mainTopPosition = mainItem.position().top

	    prevItem = sideItem.prev()
	    if (prevItem.length) {
	    	if (prevItem.position().top == mainTopPosition && sideItem.hasClass('side-item--active-forced')) {
	        	mainTopPosition = prevItem.height() + mainTopPosition + 23
	      	}
	    }

	    if (mainItem.length) {
	      	sideItem.css('top', mainTopPosition)
	    }
    }
  })
}
sideItemPosition()



$(document).on('mouseenter', '.js-main-item-position', function () {
  const item = $(this)
  const container = item.closest('.page-column')
  const sideItem = container.find('.side-item[data-id="' + item.data('id') + '"]')

  if (sideItem) {
    container.find('.side-item').removeClass('side-item--active')
    sideItem.addClass('side-item--active')
  }
})

$(document).on('mouseleave', '.js-main-item-position', function () {
  const item = $(this)
  const container = item.closest('.page-column')

  container.find('.side-item').removeClass('side-item--active')
})
