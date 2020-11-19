'use strict';

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

const date = prompt('Введите дату', '01.01.2001');

    const a = date.substring(0, 2);

    const b = date.substring(3, 5);

    const c = date.substring(6, 10);

let day = +a;

let month = b;

let year = + c;

let yearchange = year + 1;

let daychange = day + 1;

let yearProverka = year % 4;

if (date.length !==10){
    alert('Ошибка, введите заново')
} else {
    if (day < 9){
        alert('0' + daychange + '.' + month + '.' + year);
    } else if (day == 28 && month == '02' && yearProverka == 0) {
        alert(`29.02.${year}`);
    } else if (day == 28 && month == '02' && yearProverka !== 0) {
        alert(`01.03.${year}`);
    } else if (day >= 9 && day < 30) {
        alert(daychange + '.' + month + '.' + year);
    } else if (day == 30 && month == '04'){
        alert(`01.05.${year}`);
    } else if (day == 30 && month == '06') {
        alert(`01.07.${year}`);
    } else if (day == 30 && month == '09') {
        alert(`01.10.${year}`);
    } else if (day == 30 && month == '11') {
        alert(`01.12.${year}`);
    } else if (day == 31 && month == '01') {
        alert(`01.02.${year}`);
    } else if (day == 31 && month == '03') {
        alert(`01.04.${year}`);
    } else if (day == 31 && month == '07') {
        alert(`01.08.${year}`);
    } else if (day == 31 && month == '08') {
        alert(`01.09.${year}`);
    } else if (day == 31 && month == '10') {
        alert(`01.11.${year}`);
    } else if (day == 31 && month == '12') {
        alert(`01.01.${yearchange}`);
    } else if (day == 28 && month == '02') {
        alert(`01.03.${year}`);
    }
    
}












