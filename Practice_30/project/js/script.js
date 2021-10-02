/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let edv = document.querySelectorAll('.promo__adv img'),
    task2 = document.querySelector('.promo__genre'),
    task3 = document.querySelector('.promo__bg'),
    task4 = document.querySelectorAll('.promo__interactive-item'),
    task4Del = document.querySelector('.promo__interactive-list');

edv.forEach(item => {
    item.remove()
});
task2.innerHTML = "драма";
//task3.insertAdjacentHTML ("afterend", '<style>background:url("../img/bg.jpg")</style>');
task3.style.backgroundImage = "url('img/bg.jpg')";


task4Del.innerHTML = "";

movieDB.movies.sort();

// movieDB.movies.forEach((item, i) => {
// task4Del.innerHTML += `<li class="promo__interactive-item">${i+1}: ${item}
// <div class="delete"></div>
// </li>`;
// });

for (let i=0; i<movieDB.movies.length; i++){
    task4Del.innerHTML += `<li class="promo__interactive-item">${i+1}: ${movieDB.movies[i]}
    <div class="delete"></div>
    </li>`;
};

console.log(task4Del);