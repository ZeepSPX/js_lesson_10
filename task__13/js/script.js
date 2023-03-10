"use strict"

// Задача 13.Знайти індекс останньої ціни, що більше за 1000---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const reversPriceArray = priceArray.slice().reverse()
const lastPriceIndex = reversPriceArray.findIndex(price => price > 1000)
const originalLastPriceIndex = lastPriceIndex !== -1 ? priceArray.length - 1 - lastPriceIndex : lastPriceIndex

document.write(`<div class="one__container"> <div> Індекс останньої ціни що більше за 1000: ${lastPriceIndex}</div></div>`)


