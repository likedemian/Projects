function init() { movieWrap = $(".main__movie__wrap"), getData() }

function getData() { var a = "https://yts.ag/api/v2/list_movies.json?sort_by=download_count&limit=6";
  $.getJSON(a, function(a) { data = data.concat(a.data.movies), $.each(data, function(a, e) { render(e, a) }) }) }

function render(a, e) { var i = $('<li class="main__movie-list__wrap" data-index="' + e + '"></li>'),
    n = $('<div class="movie__item__wrap"></div>'),
    t = $('<div class="movie__poster__wrap"></div>'),
    p = $('<div class="movie__info__wrap"></div>'),
    s = $('<img class="movie__poster" src="' + a.medium_cover_image + '" alt="' + a.title + '"/>'),
    _ = $('<h3 class="movie__title">' + a.title + "</h3>"),
    o = $('<span class="movie__year">' + a.year + "</span>"),
    r = $('<span class="movie__rating">' + (a.rating / 2).toFixed(1) + "</span>");
  btnWrap = $('<div class="detail__button"></div>'), btnParam = $('<p class="btn__param">More Info</p>'); var d = "",
    v = null;
  $.each(a.genres, function(e, i) { a.genres.length - 1 === e ? d += i : d += i + " | " }), v = $('<p class="movie__genre">' + d + "</p>"), btnWrap.append(btnParam), t.append(s), t.append(r), p.append(_), p.append(o), p.append(v), p.append(btnWrap), n.append(t), n.append(p), i.append(n), movieWrap.append(i) }
var movieWrap, data = [];
init();