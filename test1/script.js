// 1 Задача

// const regExp = /^[0-9]+$/;

// const containsOnlyDigits = (str) => {
//     return regExp.test(str);
// }

// console.log(containsOnlyDigits("1245"));
// console.log(containsOnlyDigits("12a5"));

// 2 Задача

// setInterval(() => {
//     console.log("Прошла секунда");
// }, 1000);

// 3 Задача

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(interval);
//         }
//         i++;
//     }, 1000);
// }

// count();

// 4 Задача

const block = document.querySelector(".block");

block.addEventListener("click", () => {
    block.classList.toggle("block--active");
});

// 5 Задача

const xhr = new XMLHttpRequest();
xhr.open("GET", "../data.json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
}