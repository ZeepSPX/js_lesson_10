"use strict"

// Задача 12.Знайти останню ціну, що більше за 1000.---------------------------------------------------------------------------------

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const lastPrice = priceArray.reduceRight((acc, curr) => curr > 1000 && !acc ? curr: acc, null)

document.write(`<div class="one__container"> <div> Остання ціна, що більше за 1000: ${lastPrice}</div></div>`)


