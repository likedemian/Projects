let page = 1;
let movieWrap = $('.main__movie__wrap');
let movieCoverWrap = $('.swiper-wrapper');
let searchResultWrap;


let API = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
let URL = '';
let state = {
  movies: 'https://api.themoviedb.org/3/movie/',
  discover: 'https://api.themoviedb.org/3/discover/movie',
  search: 'https://api.themoviedb.org/3/search/movie',
  genres: 'http://api.themoviedb.org/3/genre/movie/list',
  profile: 'https://image.tmdb.org/t/p/w185',
  poster_small: 'https://image.tmdb.org/t/p/w342',
  backdrop: "https://image.tmdb.org/t/p/w1280",
  top_rated: '&sort_by=vote_average.desc&vote_count.gte=1000',
  new_release: '&primary_release_year=2017&vote_count.gte=50',
  popularity: '&primary_release_year=2016&vote_count.gte=50',
  korean: '&language=ko',
  pages: '&page=',
  actors: '&with_cast=',
  keyword: '',
  no_poster: 'https://raw.githubusercontent.com/likedemian/Projects/master/ASAP/dist/no-poster.png',
  no_cover: 'https://raw.githubusercontent.com/likedemian/Projects/master/ASAP/dist/no_cover_image.png',
  no_profile: 'https://raw.githubusercontent.com/likedemian/Projects/master/ASAP/dist/no-profile.png'
}










const init = () => {
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










$(document).ready(() => {
  $('#header__search-form').on('submit', (e) => {
    let searchText = $('#header__search-text').val();
    searchMovies(searchText);
    e.preventDefault();
  });
});










const searchMovies = (searchText) => {
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=64391ca210dbae0d44b0a622177ef8d3&language=ko&vote_count.gte=100&query=' + searchText)
    .then((response) => {

      console.log(response);
      let movies = response.data.results
      let searchOutput = '';
      $.each(movies, (index, movie) => {


        searchOutput += `
          <a onclick="movieSelected('${movie.id}')" class="header__search__link" href="#">
            <div class="header__search__result">
              <img src="${state.profile+movie.poster_path === state.profile+'null'?state.no_poster:state.profile+movie.poster_path}" alt="${movie.title}" class="header__search__image">
                <h6 class="header__search__title">${movie.title}</h6>
                <span class="header__search__year">${movie.release_date.split('-')[0]}</span>
            </div>
          </a>
        `;
      });

      $('.header__search__result__wrap').html(searchOutput);

    })
    .catch((err) => {
      console.log(err);
    })
}











const movieSelected = (id) => {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false
}













const getMovie = () => {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://api.themoviedb.org/3/movie/' + movieId + '?api_key=64391ca210dbae0d44b0a622177ef8d3&language=ko')



    .then((response) => {
      console.log(response);
      let movie = response.data;

      let detailMainOutput = `
        <div class="main__detail__movie__wrap">
          <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" class="main__detail__poster">
        </div>
        <ul class="main__detail__info__lists">
          <li class="main__detail__info__item"><strong>개봉일: </strong> ${movie.release_date.replace('-', '년 ').replace('-', '월 ').concat('일')}</li>
          <li class="main__detail__info__item"><strong>장르: </strong> ${movie.genres[0].name}</li>
          <li class="main__detail__info__item"><strong>평점: </strong>${movie.vote_average}/10</li>
          <li class="main__detail__info__item"><strong>언어: </strong> ${movie.spoken_languages[0].name}</li>
          <li class="main__detail__info__item"><strong>상영시간: </strong> ${movie.runtime}분</li>
        </ul>
        <div class="main__detail__btn__wrap">
          <a class="main__detail__btn imdb" href="http://imdb.com/title/${movie.imdb_id}" target="_blank">View IMDB</a>
          <a class="main__detail__btn back" href="index.html">Back to the Main</a>
        </div>
      `;
      let detailSubOutput = `
        <div class="main__detail__synopsis__wrap">
          <h2 class="main__detail__movie__title">${movie.title}<span class="main__detail__movie__year">${movie.release_date.split('-')[0]}<span></h2>
          <h3 class="main__detail__synopsis__title">SYNOPSIS</h3>
          <p class="main__detail__synopsis__param">${movie.overview}</p>
        </div>
      `;

      $('.main__detail__main__wrap').html(detailMainOutput);
      $('.main__detail__sub__wrap').html(detailSubOutput);
    })

    .catch((err) => {
      console.log(err);
    })





  axios.get('http://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=64391ca210dbae0d44b0a622177ef8d3&language=ko&append_to_response=movie_credits')
    .then((response) => {
      let creditData = response.data;
      let cast = response.data.cast;
      let crew = response.data.crew;
      let crewData = [];
      let crewLength = response.data.crew.length
      console.log(response);
      console.log(crewLength);
      console.log(crewData);

      for(let i = 0; i <crewLength; i++){
        if(creditData.crew[i].job === 'Director') {
          crewData = creditData.crew[i];
          break;
        }
      }
        if ( !!crewData.profile_path ) {
          crewData.profile_path = state.profile + crewData.profile_path
        } else {
          crewData.profile_path = state.no_profile;
        }
        
      let creditsOutput = `
        <div class="main__detail__casting__wrap">
          <h4 class="main__detail__credits__info">CAST</h4>
          <ul class="main__detail__credits__lists">
            <li class="main__detail__credits">
              <img class="crew__profile"src="${crewData.profile_path}"/>
              <p class="crew__name">${crewData.name}</p>
              <p class="crew__job">${crewData.job}</p>
            </li>
            <li class="main__detail__credits">
              <img class="cast__profile"src="${state.profile + cast[0].profile_path === state.profile+'null' ? state.no_profile : state.profile + cast[0].profile_path}"/>
              <p class="cast__name">${cast[0].name}</p>
              <p class="cast__character">${cast[0].character}역</p>
            </li>
            <li class="main__detail__credits">
              <img class="cast__profile"src="${state.profile + cast[1].profile_path === state.profile+'null' ? state.no_profile : state.profile + cast[1].profile_path}"/>
              <p class="cast__name">${cast[1].name}</p>
              <p class="cast__character">${cast[1].character}역</p>
            </li>
            <li class="main__detail__credits">
              <img class="cast__profile"src="${state.profile + cast[2].profile_path === state.profile+'null' ? state.no_profile : state.profile + cast[2].profile_path}"/>
              <p class="cast__name">${cast[2].name}</p>
              <p class="cast__character">${cast[2].character}역</p>
            </li>
            <li class="main__detail__credits">
              <img class="cast__profile"src="${state.profile + cast[3].profile_path === state.profile+'null' ? state.no_profile : state.profile + cast[3].profile_path}"/>
              <p class="cast__name">${cast[3].name}</p>
              <p class="cast__character">${cast[3].character}역</p>
            </li>
          </ul>
        </div>
      `;
      $('.main__detail__credits__wrap').html(creditsOutput);
    })


    .catch((err) => {
      console.log(err);
    });
  }










const getMovies = () => {
  let urls = {
    trending: state.discover + API + state.korean + state.popularity + state.pages + page,
    topRated: state.discover + API + state.korean + state.top_rated + state.pages + page,
    newReleased: state.discover + API + state.korean + state.new_release + state.pages + page
  };

  $.get(urls.topRated)
    .then((response) => {
      let i = 1;
      let movies = response.results;
      let coverOutput = '';
      let listOutput = '';
      console.log(response);


      $.each(movies, (index, movie) => {
        coverOutput += `
          <div class="swiper-slide"> 
            <img src="${state.backdrop+movie.backdrop_path === state.backdrop+'null' ? state.no_cover: state.backdrop+movie.backdrop_path}" alt="main image" class="main__cover__image">
            <h2 class="main__cover__title">${movie.title}</h2>
            <span class="main__cover__release">개봉일 : ${movie.release_date.replace('-', '년 ').replace('-', '월 ').concat('일')}</span>
            <span class="main__cover__rating">평점 : ${movie.vote_average}</span>
            <p class="main__cover__synopsis">${movie.overview}</p>
          </div>
        `;

        listOutput += `
          <li class="main__movie-list__wrap">
            <div class="movie__item__wrap">
              <div class="movie__poster__wrap">
                <img class="movie__poster" src="${(state.profile + movie.poster_path === state.profile+'null') ? state.no_poster: state.profile + movie.poster_path}" alt="${movie.title}" />
                <span class="movie__rating">${movie.vote_average}</span>
              </div>
              <div class="movie__info__wrap">
                <h3 class="movie__title">${movie.title}</h3>
                <p class="movie__genre">${movie.genre_ids.join(', ').replace('28', '액션').replace('12', '모험').replace('16', '애니메이션').replace('35', '코미디').replace('80', '범죄').replace('99', '다큐멘터리').replace('18', '드라마').replace('10751', '가족').replace('14', '판타지').replace('36', '역사').replace('27', '공포').replace('10402', '음악').replace('9648', '미스터리').replace('10749', '로맨스').replace('878', 'SF').replace('10770', 'TV 영화').replace('53', '스릴러').replace('10752', '전쟁').replace('37', '서부')}</p>
                <button class="detail__button">
                  <p onclick="movieSelected('${movie.id}')" class="ripple btn__param">More Info</p>
                </button>
              </div>
            </div>
          </li>
          `;
      });
      movieCoverWrap.append(coverOutput)
      movieWrap.append(listOutput)
    })
    .catch((err) => {
      console.log(err);
    });
};







init();