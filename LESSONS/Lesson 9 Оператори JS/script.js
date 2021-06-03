"use strict";

// console.log('arr ' + '- object');   // arr - object
// console.log(4 + ' - object');       // 4 - object

// console.log(4 + +' - object');      // NaN

// console.log(4 + '5');               // 45

// console.log(4 + +'5');              // 9



// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);          // 11
// console.log(--decr);          // 9



// Залишок від ділення =============================================================================

// console.log(5%2);       // 1



// =============================================================================

// = присвоєння
// == рівне, зрівнює по значенню, АЛЕ НЕ по типу даних
// === зрівнює по значенню, а також ПО ТИПУ ДАНИХ         (строго рівно)


// !== строго не рівно

// != не строго не рівно




// console.log(2*4 == 8);      // true

console.log(2*4 == '8');       // true  тут ми зрівнюємо по значенню

console.log(2*4 === '8');       // false

console.log(2*4 === 8);         // true  тут ми зрівнюємо по значенню а також по по типу даних



// Логічні оператори ===========================
// && 
// ||

// const isChecked = false,
//     isClose = false;



// console.log(isChecked && isClose);      // false


//  Оператор !      (оператор заперечення) =========================================================

const isChecked = false,
      isClose = false;


console.log(isChecked || !isClose);     // true



// Порядок виконання дій операторів ===========================================================

console.log(2 + 2 * 2 === 8);       // false

console.log(2 + 2 * 2 != 8);        // true


console.log(2 + 2 * 2 != '6');      // false

console.log(2 + 2 * 2 !== '6');     // true

















