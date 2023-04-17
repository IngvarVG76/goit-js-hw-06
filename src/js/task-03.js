//! Завдання 3
//? Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//* Solution

// 1) Get ul by class
const imageList = document.querySelector(".gallery");

// 2) Create new array of li with images and styles by mapping images
const imageItem = images.map((images) => {
  return `<li><img src="${images.url}" alt="{images.alt}" width="300"></li>`;
})

// 3) Inserting walid html code by joining new array in to a text string
imageList.insertAdjacentHTML("beforeend", imageItem.join(""));

// 4) Adding styles to ul
imageList.style.cssText = "display: flex; flex-wrap: wrap; gap: 20px; list-style: none; max-width: auto;";



