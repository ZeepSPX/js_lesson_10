"use strict"

// Задача 1. Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.---------------------------------------------------------------------------------

function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 10000) + 1);
  }
  return arr;
}

const priceArray = generateRandomArray(10)

const pricessGreaterThan100 = priceArray.filter((priceArray) => priceArray > 1000)

// console.log(pricessGreaterThan100);


document.write(`<div class="one__container"> <div> Масив чисел які більші за 1000грн: ${pricessGreaterThan100}</div></div> `)


