'use strict';

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const doll = +prompt('введите вашу сумму в USD', '');

let curr = prompt('в какую валюту хотите перевести(EUR, UAN или AZN)', '');

let currChange = curr.toUpperCase();

const euro = doll * 0.84;

const griv = doll * 28.18;

const azer = doll * 1.7;

if (currChange !== 'EUR' && currChange !== 'UAN' && currChange !== 'AZN'){
    alert('введите корректную валюту');
} else if (currChange == 'EUR') {
    alert('Ваша сумма: ' + euro + ' EUR');
} else if (currChange == 'UAN') {
    alert('Ваша сумма: ' + griv + ' UAN')
} else if (currChange == 'AZN') {
    alert('Ваша сумма: ' + azer + ' AZN')
} else {
    alert('что то пошло не так');
}