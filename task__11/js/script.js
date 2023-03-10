"use strict"

// Задача 11.Знайти індекс першої ціни, що більше за 1000---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)

const firstPriceIndex = priceArray.findIndex(price => price > 1000)

document.write(`<div class="one__container"> <div> Індекс першої ціни, що більше за 1000: ${firstPriceIndex}</div></div>`)


