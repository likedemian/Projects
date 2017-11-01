;
(function(global, $) {
  'use strict';
  let page = 1;
  let movieWrap;
  let movieCoverWrap;
  let searchResultWrap;



  const init = () => {
    movieWrap = $('.main__movie__wrap');
    movieCoverWrap = $('.swiper-wrapper');
    searchResultWrap = $('.header__search__result__wrap');
    // navLists = $('.nav__item');
    bind();
    getMovies()
  }

  const bind = () => {
    $(window).scroll(function() {
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        ++page && getMovies()
      }
    });
  };


  const getMovies = () => {
    let API = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
    let URL = '';
    let state = {
      discover: 'https://api.themoviedb.org/3/discover/movie',
      // movies: 'https://api.themoviedb.org/3/movie/',
      search: 'https://api.themoviedb.org/3/search/movie',
      poster_small: 'https://image.tmdb.org/t/p/w342',
      backdrop: "https://image.tmdb.org/t/p/w1280",
      profile: 'https://image.tmdb.org/t/p/w185',
      top_rated: '&sort_by=vote_average.desc&vote_count.gte=1000',
      new_release: '&primary_release_year=2017&vote_count.gte=50',
      popularity: '&primary_release_year=2016&vote_count.gte=50',
      korean: '&language=ko',
      pages: '&page=',
      keyword: '',
      search_data: '',
      no_poster: 'https://raw.githubusercontent.com/likedemian/Projects/master/ASAP/dist/no-poster.png',
      no_cover: 'https://raw.githubusercontent.com/likedemian/Projects/master/ASAP/dist/no_cover_image.png'
    }
    let urls = {
      trending: state.discover + API + state.korean + state.popularity + state.pages + page,
      topRated: state.discover + API + state.korean + state.top_rated + state.pages + page,
      newReleased: state.discover + API + state.korean + state.new_release + state.pages + page
    };


    $(document).ready(() => {
      $('.header__search__container').on('submit', (e) => {
        let searchText = $('#header__search-text').val();
        searchMovies(searchText);
        e.preventDefault();
      });
    });

    function searchMovies(searchText) {
      axios.get(state.search + API + state.korean + "&query=" + searchText)
        .then((response) => {
          console.log(response);
          let movies = response.data.results;
          console.log(movies);
          let searchOutput = '';
          $.each(movies, (index, movie) => {
            searchOutput += `
              <div class="header__search__result">
                <img class="header__search__poster" src="${(state.poster_small + movie.poster_path === state.poster_small+'null') ? state.no_poster: state.poster_small + movie.poster_path }" alt="${movie.title}"/>
                <h5 class="header__search__title">${movie.title}</h5>
                <a onclick="movieSelected('${movie.id}')" class="header__search__details-btn" href="#">Movie Details</a>
              </div>
            `
          });
          searchResultWrap.append(searchOutput)
        })
        .catch((err) => {
          console.log(err);
        })
    }




    $.get(urls.topRated)
      .then((response) => {
        let i = 1;
        let movies = response.results;
        let coverOutput = '';
        $.each(movies, (index, movie) => {
          coverOutput += `
            <div class="swiper-slide"> 
              <img src="${state.backdrop+movie.backdrop_path === state.backdrop+'null' ? state.no_cover: state.backdrop+movie.backdrop_path}" alt="main image" class="main__cover__image">
              <h2 class="main__cover__title">${movie.title}</h2>
              <span class="main__cover__release">개봉일 : ${movie.release_date}</span>
              <span class="main__cover__rating">평점 : ${movie.vote_average}</span>
              <p class="main__cover__synopsis">${movie.overview}</p>
            </div>
            `
        });
        movieCoverWrap.append(coverOutput)
      })
      .catch((err) => {
        console.log(err);
      })

    $.get(urls.trending)
      .then((response) => {
        let i = 1;
        let movies = response.results;
        let listOutput = '';
        $.each(movies, (index, movie) => {
          listOutput += `
            <li class="main__movie-list__wrap" data-index="' + index + '">
              <div class="movie__item__wrap">
                <div class="movie__poster__wrap">
                  <img class="movie__poster" src="${(state.poster_small + movie.poster_path === state.poster_small+'null') ? state.no_poster: state.poster_small + movie.poster_path }" alt="${movie.title}"/>
                  <span class="movie__rating">${movie.vote_average}</span>
                </div>
              <div class="movie__info__wrap">
                <h3 class="movie__title">${movie.title}</h3>
                <p class="movie__genre">${movie.genre_ids.length === 0 ? 'Not Yet Added Generes' : movie.genre_ids}</p>
                <button class="detail__button">
                  <p class="ripple btn__param">More Info</p>
                </button>
              </div>
            </div>
          </li>
        `;
        });
        movieWrap.append(listOutput)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  init();
})(window, window.jQuery);