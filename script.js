"Use Strict";
//Task 1
const numberOfFilms = +prompt('Скільки фільмів ви уже побачили?','');


//Task 2
const  personalMovieDB = {
   count : numberOfFilms,
    movies : {},
     actors : {},
      genres : [],
      privat : false
   };

//Task 3

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);