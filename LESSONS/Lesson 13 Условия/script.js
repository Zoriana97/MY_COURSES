"use strict";

// if(4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');            // Error
// }


// if(1) {
//     console.log('Ok!');     // Ok!
// } else {
//     console.log('Error');
// }



// const num = 50;

// if(num < 49) {
//     console.log('Error');
// } else if(num > 100) {
//     console.log('To much');
// } else {
//     console.log('Ok!');
// }



// Тернарний оператор =========================================================================

// Тернарний оператор нащивається тернарним, бо має три аргументи

// const num = 50;


// 1 аргумент       // 2 аргумент        // 3 аргумент
// (num === 50) ? console.log('Ok!') : console.log('Error');




// Конструкція Switch =========================================================================


const num = 50;

switch(num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50: 
        console.log('В точку!');            // В точку!
        break;
    default:
        console.log('Не в этот раз');
        break;    
}