'use strict';

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов

let one = prompt('Сколько мне лет? (25, 26 или 27)', '');

let two = prompt('Где я учусть? (универ, школа или битрут)', '');

let three = prompt('Во сколько у нас начинается урок? (в 18, в 19 или в 17)', '');


if (one !== '26' && two !== 'битрут' && three !== '18') {
    alert('У вас 0 баллов!');
} else if (one == '26' && two !== 'битрут' && three !== '18') {
    alert('У вас 2 балла!');
} else if (one !== '26' && two == 'битрут' && three !== '18') {
    alert('У вас 2 балла!');
} else if (one !== '26' && two !== 'битрут' && three == '18') {
    alert('У вас 2 балла!');
} else if (one == '26' && two == 'битрут' && three !== '18') {
    alert('У вас 4 балла!');
} else if (one == '26' && two !== 'битрут' && three == '18') {
    alert('У вас 4 балла!');
} else if (one !== '26' && two == 'битрут' && three == '18') {
    alert('У вас 4 балла!');
} else if (one == '26' && two == 'битрут' && three == '18') {
    alert('У вас 6 баллов!');
}

