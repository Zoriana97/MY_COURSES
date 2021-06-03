"use strict";


// alert ==========================================================================
// alert('Hello');




// confirm ==========================================================================
// const result = confirm('Are you here?');
// console.log(result);        // якщо відповідаємо ок, тоді буде true

                            // якщо відповідаємо cancel, то у змінній result буде false


// prompt ==========================================================================   

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));    // string


// Вся інформація, яка буде отримана від користувача, завжди буде типу string


// const answer = prompt('Вам є 18?', '18');
// console.log(typeof(18));   // number


// Якщо перед prompt поставити +, то число яке буде вписане в prompt буде не типу string, а number


// const answer = +prompt('Вам є 18?', '18');
// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Какая у вас фамилия?');
// answers[2] = prompt('Сколько вам лет?');

// document.write(answers);



// const answers = [];
// console.log(typeof(answers));       // object


//  Тип даних масиву - об'єкт





// console.log(typeof(null));      // object

// null не є об'єктом, а те що показує що тип даних у null це об'єкт це є офіційно признана помилка
