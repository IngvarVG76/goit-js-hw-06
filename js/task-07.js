//! Завдання 7

//? Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

//* Solution

// 1) Get elements
const inputEl = document.querySelector("#font-size-control");
// console.dir(inputEl);
const textEl = document.querySelector("#text");
// console.dir(textEl);

// 2) Add event listener and font size updater 
inputEl.addEventListener("input", () => {
    textEl.style.fontSize = `${inputEl.value}px`
})




