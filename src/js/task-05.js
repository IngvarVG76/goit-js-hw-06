//! Завдання 5
//? Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


//* Solution

// 1) Get elements
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// 2) Add event listener and function to update output 
input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent === "") {
        output.textContent = "Anonymous";
    }
})
