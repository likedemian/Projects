$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  })
  $('.fore-cine').css({
    'transform': 'translate(0px, -' + wScroll / 20 + '%)'
  })

  if (wScroll > $('.directors-pics').offset().top / 1.5) {

    $('.directors-pics figure').each(function(i) {

      setTimeout(function() {
        $('.directors-pics figure').eq(i).addClass('is-showing');
      }, 100 * (i+1));
    });
  }
  
  if(wScroll > $('.video-container').offset().top/2){
    $('.overlay-header').css({'opacity': '0.'+ (wScroll * 4.5)})
    $('.overlay-text').css({'opacity': '0.'+ (wScroll * 4.5)})

  }
});
