"use strict"

// Задача 2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.----------------------------------------
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)

const indexes = priceArray.map((_, index) => index).filter(index => priceArray[index] > 1000)

document.write(`<div class="one__container"> <div> Індекси чисел які більші за 1000: ${indexes}</div></div> `)





