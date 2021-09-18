/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Only Numbers");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert ("Просмотрено довольно мало фильмов");
 }
 else if (personalMovieDB.count >=10 || personalMovieDB.count < 30) {
     alert ("Вы классический зритель");
 }
 else if (personalMovieDB.count >= 10){
     alert ("Вы Кинонаркоман");
      }
      else {alert ("Shit happen");}

for (let i = 0; i < numberOfFilms; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', "");
    const estimation = +prompt('На сколько оцените его?', "from 1 to 5");

    if (film != null && estimation != null && film != '' && estimation != '' && film.length <= 50) {
        personalMovieDB.movies[film] = estimation;
        alert('you are Good!');
    } else {
        alert('Are you kidding ? ? ? ? ? Жопошник!!!!');
        i--;
    }
}



console.log(personalMovieDB);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания