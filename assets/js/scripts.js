// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

$('.page-numbers li').each(function(index, el) {

  $(this).addClass('c-pagination__item c-pagination__list-item ');
  $(this).find('a').addClass('c-pagination__dot');
  $(this).find('.current').parent().addClass('is-current');
  $(this).find('.current').addClass('c-pagination__dot');
  $(this).find('.next').addClass('c-pagination__nav c-pagination__nav--next').removeClass('c-pagination__dot');
  $(this).find('.next').html('<span class="u-sr-only">Next</span><i class="c-icon c-icon--right-open c-pagination__nav-icon"></i>');
  $(this).find('.prev').addClass('c-pagination__nav c-pagination__nav--next').removeClass('c-pagination__dot');
  $(this).find('.prev').html('<span class="u-sr-only">Next</span><i class="c-icon c-icon--left-open c-pagination__nav-icon"></i>');

});

