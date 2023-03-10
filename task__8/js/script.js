"use strict"

// Задача 8. Підрахувати кількість цін, що більше за 1000---------------------------------------------------------------------------------
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const countPricesOver1000 = priceArray.filter(price => price > 1000).length

document.write(`<div class="one__container"> <div> Кількість цін що більше за 1000: ${countPricesOver1000}</div></div>`)