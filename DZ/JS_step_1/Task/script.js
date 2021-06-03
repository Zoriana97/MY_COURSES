
'use strict';


// 1). ================================================================================

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);


// 2). ================================================================================

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// 3). ================================================================================

const a = prompt('Один из последних просмотренных фильмов?');
const b = prompt('На сколько оцените его?');
const c = prompt('Один из последних просмотренных фильмов?');
const d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);