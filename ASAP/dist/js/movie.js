;
(function(global, $) {
  'use strict';
  var movieList;
  var moviePoster;
  var data = [];
  var URL = '';
  var urls = {
    trending: 'https://yts.ag/api/v2/list_movies.json?sort_by=download_count&limit=18&page=',
    topRated: 'https://yts.ag/api/v2/list_movies.json?order_by=desc&sort_by=rating&limit=18&page=',
    newArrivals: 'https://yts.ag/api/v2/list_movies.json?sort_by=date_added&limit=18&page='
  };

  function getData() {
    $.get(URL, function(response) {
      if (response.status === 'ok' && response.data.movie_count !== 0) {
        data = data.concat(response.data.movies);
        $.each(data, function(index, data) {
          render(data, index);
          // console.log('yoyo');
        });
      }
    })
  }

getData();
})(window, jQuery);