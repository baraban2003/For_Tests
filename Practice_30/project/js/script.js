/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        movies = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        filmName = document.querySelector('.adding__input'),
        checkYes = document.querySelector('[type="checkbox"]');

    function deleteAdv() {
        edv.forEach(item => {
            item.remove();
        });

    }

    function makeChanges() {
        task2.innerHTML = "драма";
        //task3.insertAdjacentHTML ("afterend", '<style>background:url("../img/bg.jpg")</style>');
        task3.style.backgroundImage = "url('img/bg.jpg')";
    }


    function sortArray(arr) {
        arr.sort();
    };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = filmName.value;
        let favorite = checkYes.checked;

//обрезали длинные слова
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }

            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);

            createMovieList(movieDB.movies, movies);
        }


        addForm.reset();

    });

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);

        films.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}: ${item}
                    <div class="delete"></div>
                    </li>`;
        });

        //при нажатии на корзинку удаляем єлемент массива
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener ('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }



    createMovieList(movieDB.movies, movies);
    deleteAdv();
    makeChanges();
    



});





//console.log(task4Del);

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */