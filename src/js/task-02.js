//! Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

//? Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//* Solution

// 1) Get ul element by id
const ingredientsList = document.querySelector("#ingredients");

// 2) Create ul list from array and add class
const ingredientsItems = ingredients.map((ingredients) => { // new array using map
  const ingredientsItem = document.createElement("li"); // create li 

  ingredientsItem.textContent = ingredients; // add name to li
  ingredientsItem.classList.add("item"); // add class to li
  return ingredientsItem; // add new element to array
})

// 3) Add new list to ul
ingredientsList.append(...ingredientsItems)


