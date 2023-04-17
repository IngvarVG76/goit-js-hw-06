//! Завдання 1
// HTML містить список категорій ul#categories.

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

//? В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


//* Solution

// 1) select ul by id
const categoriesList = document.querySelector("#categories"); 
// console.log(categoriesList); // check

// 2) select li by class
const categoriesItems = categoriesList.querySelectorAll(".item"); 
// console.log(categoriesItems); // check

// Logging Number of categories
console.log(`Number of categories: ${categoriesItems.length}`); 

  // Logging Cat Name & Qty
categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent; // select cat name by its text content
  // console.log(categoryName); // check
  const categoryLength = category.querySelectorAll("li").length; // select all descendants and find length
  // console.log(categoryLength); // check

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryLength}`);
});
