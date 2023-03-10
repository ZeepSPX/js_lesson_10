"use strict"

// Задача 5.Підрахувати кількість змін цін---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const changePrice = priceArray.filter((price, index) => {
    return price !== price[index-1]
}).length

document.write(`<div class="one__container"> <div> Кількість змін у масиві: ${changePrice}</div></div> `)