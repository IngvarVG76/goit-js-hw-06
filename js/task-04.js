//! Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//? Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

//* Solution

// 1) Get elements
const counterValue = document.querySelector("#value");
// console.log(counterValue);

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

// 2) Add event listener to btns
decrementBtn.addEventListener("click", onClick);
incrementBtn.addEventListener("click", onClick);

// 3) Create counter
let click = 0;

// 4) Create callback function onClick
function onClick() {
    if (this.getAttribute("data-action") === "increment") {
        click += 1;
        counterValue.textContent = click;
    } else if (this.getAttribute("data-action") === "decrement") {
        click -= 1;
        counterValue.textContent = click;
    }
}
