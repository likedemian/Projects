;
(function(global, $) {
  'use strict';
  var page = 1;
  var movieWrap;
  var movieCoverWrap;

  function init() {
    movieWrap = $('.main__movie__wrap');
    movieCoverWrap = $('.swiper-wrapper');
    getMovies()
    bind();
  }

  function bind() {
    $(window).scroll(function() {
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        ++page && getMovies()
      }
    });
  };

  function getMovies() {
    var API = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
    var state = {
      discover: 'https://api.themoviedb.org/3/discover/movie',
      movies: 'https://api.themoviedb.org/3/movie/',
      search: 'https://api.themoviedb.org/3/search/movie',
      poster_small: 'https://image.tmdb.org/t/p/w342',
      backdrop: "https://image.tmdb.org/t/p/w1280",
      profile: 'https://image.tmdb.org/t/p/w185',
      popularity: '&sort_by=popularity.desc',
      popularity_recent: '&primary_release_year=2017&sort_by=popularity.desc',
      korean: '&language=ko',
      pages: '&page=',
      keyword: '',
      search_data: '',
      noposter: ''
    }
    $.get(state.discover + API + state.popularity_recent + state.pages + page)
      .then((response) => {
        state.search_data = response.results;
        let search_length = state.search_data.length;
        console.log(search_length);
        console.log(state.search_data.poster_path);
        for (let i = 0; i < search_length; i++) {
          (state.search_data.poster_path) ? state.search_data.poster_path = state.url_poster_small + state.search_data.poster_path : state.search_data.poster_path = state.url_noposter_search;
        }

        console.log(response);
        let movies = response.results;
        let coverOutput = '';
        let listOutput = '';
        $.each(movies, (index, movie) => {
          coverOutput += `
          <div class="swiper-slide"> 
            <img src="${state.backdrop+movie.backdrop_path}" alt="main image" class="main__cover__image">
            <h2 class="main__cover__title">${movie.title}</h2>
            <span class="main__cover__release">개봉일: ${movie.release_date}</span>
            <span class="main__cover__rating">평점: ${movie.vote_average}</span>
            <p class="main__cover__synopsis">${movie.overview}</p>
          </div>
          `
          listOutput += `
            <li class="main__movie-list__wrap" data-index="' + index + '">
              <div class="movie__item__wrap">
                <div class="movie__poster__wrap">
                  <img class="movie__poster" src="${state.poster_small+movie.poster_path}" alt="${movie.title}"/>
                  <span class="movie__rating">${movie.vote_average}</span>
                </div>
                <div class="movie__info__wrap">
                  <h3 class="movie__title">${movie.title}</h3>
                  <p class="movie__genre">${movie.genre_ids}</p>
                <button class="detail__button">
                  <p class="ripple btn__param">More Info</p>
                </button>
                </div>
              </div>
            </li>
          `;
        });

        movieWrap.append(listOutput)
        movieCoverWrap.append(coverOutput)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  init();

})(window, window.jQuery);