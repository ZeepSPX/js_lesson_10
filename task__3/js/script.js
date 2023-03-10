"use strict"

// Задача 3. Сформувати список з тих цін, які більші за попереднє значення---------------------------------------------------------------------------------
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10000) + 1);
    }
    return arr;
}

const priceArray = generateRandomArray(10)
const findPriceHigher = priceArray.filter((curr, index, arr) => {
  return index > 0 && curr > arr[index - 1]
})

document.write(`<div class="one__container"> <div> Сформувати список з тих цін, які більші за попереднє значення: ${findPriceHigher}</div></div> `)
