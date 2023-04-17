//! Завдання 8
//? Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

//* Solution

// 1) Get form
const formEl = document.querySelector(".login-form");
// console.log(formEl);

// 2) Set evt listener, prevent default, get form values by destructurizing, check if any ampty, log result, reset form
formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;
    
  if (!email.value || !password.value) {
    alert("All fields are required!");
  } else {
    console.log(email.value, password.value);
    formEl.reset();
  }
});
