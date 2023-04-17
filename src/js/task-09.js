//! Завдання 9
//? Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//* Solution 

// 1) Get elements
const btnEl = document.querySelector(".change-color");
// console.dir(btnEl);
const bgColorEl = document.querySelector(".color");
// console.log(bgColorEl);
const bodyEl = document.querySelector("body")
// console.log(bodyEl);


// 2) Add evt listener, callback random color, set color as bg and span text
btnEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  bgColorEl.textContent = randomColor;
});

