'use strict';

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const num = prompt('введите пятиразрядное число', '');

const a = num[0];

const b = num[1];

const c = num[3];

const d = num[4];

    const e = a + b;

    const f = d + c;

if (num.length !==5){
    alert('ошибка, введи пятиразрядное число')
} else {
    if (e == f) {
        alert('это полиндром');
    } else {
        alert('это не полиндром');
    }
}