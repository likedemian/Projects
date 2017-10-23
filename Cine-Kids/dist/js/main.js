(function(global, $) {
  'use strict';

  var cont_list = null;
  var footer_heading = null;
  var data = [];
  var page_number = 0;
  var limit = 12
  var scrolling_offsetTop = 0;
  var get_data_flag = false;
  var min_data_index = 0;
  var max_data_index = 1;

  function init() {
    cont_list = $('.main__cont__list');
    footer_heading = $('.footer__heading');
    bind();
    getData();
  }

  function bind() {
    $(window).on('scroll', function() {
      var scrollY = $(this).scrollTop();
      console.log('scrollY', scrollY);
      if (scrollY > scrolling_offsetTop) {
        get_data_flag && getData();
      }
    })
  }
  function getData() {
    get_data_flag = false;
    page_number++;

    // console.log('getData: ', page_number);
    $.get('https://yts.ag/api/v2/list_movies.json?sort_by=rating&limit=12&page=' + page_number, function(response) {
      // page_number, data 받기
      data = data.concat(response.data.movies); 
      console.log(data);
      remomveRenderedItem();

      $.each(data, function(index, data) {

        render(data, index);
      });
      // reset scrolling_offsetTop;


      setTimeout(function() {
        // scrolling_offsetTop = footer_heading.offset().top / 1.5;
        scrolling_offsetTop = $(document).height() - 1500;
        // console.log('scrolling_offsetTop: ', scrolling_offsetTop);

        get_data_flag = true;
      }, 500);
    });
  }

  function remomveRenderedItem() {
    var children = cont_list.children();
    
    if(children.length === 0) {
      return;
    }

    for(var i = 0, len = children.length; i < len; i++) {
      children[i].remove();
    }
  }

  function render(data, index) {
    /**
     * ul(cont_list) 
     *  - li.body__cont__item
     *    - div.body__cont__item-wrapper
     *      - div.body__cont__poster__wrapper
     *        - img.body__cont__poster 
     *        - span.body__cont__year
     *      - div.body__cont__info__wrapper
     *        - h3.body__cont__title
     *        - p.body__cont__genres
     *        - span.body__cont__rating
     */


    // Create Element
    var li = $('<li class="main__cont__item" data-index="' + index + '"></li>'),
        // item_wrapper = $('<div class="main__cont__item-wrapper"></div>'),
        poster_wrapper = $('<div class="main__cont__poster__wrapper"></div>'),
        info_wrapper = $('<div class="main__cont__info__wrapper"></div>'),
        poster = $('<img class="main__cont__poster" src="' + data.medium_cover_image + '" alt="' + data.title + '"/>'),
        year = $('<span class="main__cont__year">' + data.year + '</span>'),
        title = $('<h3 class="main__cont__title">' + data.title + '</h3>'),
        rating = $('<span class="main__cont__rating">' + (data.rating / 2).toFixed(1) + '</span>');

    var genres = '';
    var genre = null;

    // console.log('data.genres', data.genres);
    $.each(data.genres, function(index, _data) {
      ((data.genres.length - 1) === index) ? genres += _data: genres += _data + ' ';
    });

    genre = $('<p class="main__cont__genres">' + genres + '</p>');

    // Append Element
    poster_wrapper.append(poster);
    poster_wrapper.append(year);

    info_wrapper.append(title);
    info_wrapper.append(genre);
    info_wrapper.append(rating);

    li.append(poster_wrapper);
    li.append(info_wrapper);
    cont_list.append(li);
  }

  init();

}(window, window.jQuery));