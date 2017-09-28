// window.document.getElementById('parallax-nav').onclick = function(e) {
//   clickDot();
//   console.log('yo');
//   e.PreventDefault();
// };


// function clickDot() {
//   var clicked = document.getElementsByClassName('dot');
//   clicked.style.backgroundColor = "red";
// }

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();


  if (wScroll > $('.cont-block-1').offset().top / 5) {
    $('.dot').css({ 'borderColor': '#000' });
    $('.dot').mouseover(function() {
      $(this).css({ 'backgroundColor': '#000' })
    });
    $('.dot').mouseout(function() {
      $('.dot').css({ 'backgroundColor': '' })
    });

    $('.dot').css({ 'transition': 'all 0.5s' });
  }



  if (wScroll > $('.second-pics').offset().top / 1.6) {
    $('.dot').css({ 'borderColor': '#fff' });
    $('.dot').mouseover(function() {
      $(this).css({ 'backgroundColor': '#fff' })
    });
    $('.dot').mouseout(function() {
      $('.dot').css({ 'backgroundColor': '' })
    });

    $('.dot').css({ 'transition': 'all 0.5s' });
  }


  if (wScroll > $('.content-2').offset().top / 1.3) {
    $('.dot').css({ 'borderColor': '#000' });
    $('.dot').mouseover(function() {
      $(this).css({ 'backgroundColor': '#000' })
    });
    $('.dot').mouseout(function() {
      $('.dot').css({ 'backgroundColor': '' })
    });

    $('.dot').css({ 'transition': 'all 0.5s' });
  }

  if (wScroll > $('.third-pics').offset().top / 1.2) {
    $('.dot').css({ 'borderColor': '#fff' });
    $('.dot').mouseover(function() {
      $(this).css({ 'backgroundColor': '#fff' })
    });
    $('.dot').mouseout(function() {
      $('.dot').css({ 'backgroundColor': '' })
    });

    $('.dot').css({ 'transition': 'all 0.5s' });
  }

  if (wScroll > $('.content-3').offset().top / 1.18) {
    $('.dot').css({ 'borderColor': '#000' });
    $('.dot').mouseover(function() {
      $(this).css({ 'backgroundColor': '#000' })
    });
    $('.dot').mouseout(function() {
      $('.dot').css({ 'backgroundColor': '' })
    });

    $('.dot').css({ 'transition': 'all 0.5s' });
  }


});