;
(function(global, $) {
  'use strict';
  var movieWrap;
  var movieCoverWrap;
  var data = [];

  function init() {
    movieWrap = $('.main__movie__wrap');
    movieCoverWrap = $('.swiper-wrapper');
    getMovies();
  }



  function getMovies() {
    var API = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
    var state = {
      discover: 'https://api.themoviedb.org/3/discover/movie',
      movies: 'https://api.themoviedb.org/3/movie/',
      search: 'https://api.themoviedb.org/3/search/movie',
      poster_small: 'https://image.tmdb.org/t/p/w342',
      backdrop : "https://image.tmdb.org/t/p/w1280",  
      profile: 'https://image.tmdb.org/t/p/w185',
      popularity: '&sort_by=popularity.desc',
      popularity_recent: '&primary_release_year=2010&sort_by=popularity.desc',
      korean: '&language=ko',
      keyword: ''
    }

    // state.url_search + state.api_key + state.url_korean + "&query=" + keyword
    $.get(state.discover + API + state.korean + state.popularity_recent)
      .then((response) => {
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
                <div class="detail__button">
                  <p class="btn__param">More Info</p>
                </div>
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