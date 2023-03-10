"use strict"

// Задача 6.Визначити, чи є ціна, що менше 1000---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const priceLess100 = priceArray.some(price => price < 1000)
document.write(`<div class="one__container"> <div> Ціна яка менша за 1000 присутня: ${priceLess100}</div></div> `)