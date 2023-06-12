// function printEven(arr) {
//   arr.forEach((x, i) => {
//     if (i % 2 === 0) {
//       console.log(x);
//     }
//   });
// }
// printEven([1, 2, 3, 4, 5, 6, 7]);

// function square(arr) {
//   arr.forEach((x) => {
//     document.createElement('div');
//let m = document.createElement('h2');
//m.innerHtml
//   });
// }
// square([4, 8, 15]);

const arr = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссер, Актер, Сценарист, Монтажер",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссер, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссер, Сценарист, Актер, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссер, Сценарист, Актер",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зеленая книга",
  },
  {
    name: "Юрий Быков",
    career: "Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажер, Актер, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

function makeFilms(arr) {
  arr.forEach((x) => {
    //общий див
    const $mainDiv = document.createElement("div");
    $mainDiv.classList.add("mainDiv");

    //создаем h2 для имени режиссера
    let $name = document.createElement("h2");
    $name.classList.add("name");
    $name.innerHTML = x.name;

    //создаем p с карьерой
    let $career = document.createElement("p");
    $career.classList.add("career");
    $career.innerHTML = x.career;

    //создаем p с фильмами
    let $films = document.createElement("p");
    $films.classList.add("films");

    // внутри будет ссылка
    let $link = document.createElement("a");
    $link.classList.add("link");
    $link.href = x.films;
    $link.innerHTML = "Список фильмов";
    $link.target = "_blank";

    //вставляем общий див в боди
    document.body.appendChild($mainDiv);
    //вставляем h2 в div
    $mainDiv.appendChild($name);
    //вставляем #career в div
    $mainDiv.appendChild($career);
    //вставляем #films в div
    $mainDiv.appendChild($films);
    //#link в #films
    $films.appendChild($link);
  });
}

const secondArr = arr.map(function (x) {
  return x.top_rated_film;
});

function topRatedFilms(secondArr) {
  const $topRatedFilm = document.createElement("div");
  $topRatedFilm.classList.add("topRated");
  document.body.appendChild($topRatedFilm);
  const $headerTop = document.createElement("h2");
  $headerTop.classList.add("headerTop");
  $headerTop.innerHTML = "Лучшие фильмы режиссеров";
  $topRatedFilm.appendChild($headerTop);
  secondArr.forEach((x) => {
    const $list = document.createElement("li");
    $list.classList.add("list");
    $list.innerHTML = x;

    $topRatedFilm.appendChild($list);
  });
}

makeFilms(arr);
topRatedFilms(secondArr);
