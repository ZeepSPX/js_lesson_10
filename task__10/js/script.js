"use strict"

// Задача 10.Знайти першу ціну, що більше за 1000---------------------------------------------------------------------------------
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const firstPrice = priceArray.find(price => price > 1000)
document.write(`<div class="one__container"> <div> Перша ціна що більше за 1000: ${firstPrice}</div></div>`)


