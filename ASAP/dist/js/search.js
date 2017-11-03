$('#header__search-text').focus(function() {
  $('.header__search__result__wrap').css({
    'display': 'block'
  });
});


$(document).on('click', '.header__search__result', function() {
  console.log('클릭했삼~!');
  $('.header__search__result__wrap').css({
    'display': 'none'
  });
});



$(document).on('click', '.header__search__result__wrap', function() {
  console.log('클릭했삼~!');
  $(this).css({
    'display': 'none'
  });
});


