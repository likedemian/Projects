;
(function(global, $) {
  'use strict';
  $('.menu-icon').click(function() {
    $(this).text(function(i, text) {
      return text === 'sort' ? 'clear' : 'sort';
    });
    $('.nav__container').toggleClass('active')
    $('.nav__container').css({
      'transition': '0.25s',
      'width': '375px'
    })

  })
})(window, jQuery);


;
(function(global, $) {
  'use strict';

})(window, jQuery);