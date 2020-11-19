'use strict';

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const num = +prompt('введите цифру 0 до 9', '');

if (num !==0 && num !==1 && num !==2 && num !==3 && num !==4 && num !==5 && num !==6 && num !==7 && num !==8 && num !==9){
    alert('ошибка, попробуй еще')
} else {
    switch (num) {
        case 0: 
            alert(')')
            break;
        case 1:
            alert('!')
            break;
        case 2:
            alert('@')
            break;
        case 3:
            alert('#')
            break;
        case 4:
            alert('$')
            break;
        case 5:
            alert('%')
            break;
        case 6:
            alert('^')
            break;
        case 7:
            alert('&')
            break;
        case 8:
            alert('*')
        case 9:
            alert('(')
    }
}
