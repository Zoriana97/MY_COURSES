"use strict";



// Типи даних JS: =======================================================================

// Примітивні типи даних ---------------------

// числа
// стрінги
// булеві значення
// null
// undefined
// symbol
// bigInt




// НЕпримітивні типи даних ---------------------

// Спец. об'єкти

// Прості об'єкти



// Number =======================================================================

// let number = 4.6;

// console.log(4/0);       // Infinity
// console.log(-4/0);      // -Infinity


// console.log('string' * 9);      // NaN


// // String =======================================================================

// const person = 'Alex';

// // backticks - це косі лапки, які застос для інтерполяції

// const person1 = `5`;


// // Boolean =======================================================================

// const bool = false;



// null =======================================================================

// console.log(something);

// undefined =======================================================================

let und;
console.log(und);       // undefined





// Об'єкти ==========================================================================

// Об'єкт - це колекція даних, структура, в якій зберігаються дані


const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name);      // John
// console.log(obj["name"]);      // John


// Масиви ==========================================================================

// Масиви не є окремим типом даних, масив - це підтип об'єкта

let arr = ['plum.png', 'orange.jpeg', 6, 'aplle.bmp', {}, []];

console.log(arr[1]);        // orange.jpeg