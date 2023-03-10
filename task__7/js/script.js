"use strict"

// Задача 7.Визначати, чи усі ціни більше за 1000---------------------------------------------------------------------------------
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const isAllPricesGreaterThan1000 = priceArray.every(price => price > 1000)
document.write(`<div class="one__container"> <div> Чи є ціни які більші за 1000: ${isAllPricesGreaterThan1000}</div></div>`)
