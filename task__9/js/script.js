"use strict"

// Задача 9.Підрахувати суму цін, що більше за 1000---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const priceSumOver10000 = priceArray.filter(price => price > 1000).reduce((price, sum) => sum + price, 0)

document.write(`<div class="one__container"> <div> Сума чисел що більіші за 1000: ${priceSumOver10000}</div></div>`)
