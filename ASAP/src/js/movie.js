(function(global, $) {
  'use strict';
  var movieWrap;
  var data = [];

  function init() {
    movieWrap = $('.main__movie__wrap');
    getMovies();
  }



  function getMovies() {
    var API = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
    var state = {
      discover = 'https://api.themoviedb.org/3/discover/movie',
      movies = 'https://api.themoviedb.org/3/movie/',
      search = 'https://api.themoviedb.org/3/search/movie',
      poster_small = 'https://image.tmdb.org/t/p/w342',
      poster_large = 'https://image.tmdb.org/t/p/w500',
      profile = 'https://image.tmdb.org/t/p/w185',
      popularity = '&sort_by=popularity.desc',
      korean = '&language=ko',
      keyword = '',
      data = '';
    }

    axios.get(state + API)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function render(data, index) {
    // Create Element
    var li = $('<li class="main__movie-list__wrap" data-index="' + index + '"></li>'),
      itemWrap = $('<div class="movie__item__wrap"></div>'),
      posterWrap = $('<div class="movie__poster__wrap"></div>'),
      infoWrap = $('<div class="movie__info__wrap"></div>'),
      poster = $('<img class="movie__poster" src="' + data.medium_cover_image + '" alt="' + data.title + '"/>'),
      title = $('<h3 class="movie__title">' + data.title + '</h3>'),
      year = $('<span class="movie__year">' + data.year + '</span>'),
      rating = $('<span class="movie__rating">' + (data.rating / 2).toFixed(1) + '</span>');
    btnWrap = $('<div class="detail__button"></div>'),
      btnParam = $('<p class="btn__param">' + 'More Info' + '</p>');

    var genres = '';
    var genre = null;

    // var add = $('<div class="movie__add">' + `&plus;` + '</div>');

    $.each(data.genres, function(index, _data) {
      ((data.genres.length - 1) === index) ? genres += _data: genres += _data + ' | ';
    });

    genre = $('<p class="movie__genre">' + genres + '</p>');

    // Append Element
    btnWrap.append(btnParam);

    posterWrap.append(poster);
    posterWrap.append(rating);
    // posterWrap.append(add);

    infoWrap.append(title);
    infoWrap.append(year);
    infoWrap.append(genre);
    infoWrap.append(btnWrap);




    itemWrap.append(posterWrap);
    itemWrap.append(infoWrap);

    li.append(itemWrap);

    movieWrap.append(li);
  }

  init();
})(window, window.jQuery);