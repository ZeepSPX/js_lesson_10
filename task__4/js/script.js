"use strict"

// Задача 4. Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)

const maxPrice = Math.max(...priceArray)
const pricePercent = priceArray.map(price => (price / maxPrice * 100).toFixed(2))
document.write(`<div class="one__container"> <div> Ціни відносно максимальної ціни: ${pricePercent}</div></div> `)






