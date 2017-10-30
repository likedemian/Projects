var movieWrap;
var data = [];

function init() {
  movieWrap = $('.main__movie__wrap');
  getData();
}



function getData() {
  var URL = 'https://yts.ag/api/v2/list_movies.json?sort_by=download_count&limit=6'
  $.getJSON(URL, function(response) {
    data = data.concat(response.data.movies)
    $.each(data, function(index, data) {
      render(data, index);
    });
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