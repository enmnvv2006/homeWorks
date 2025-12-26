// 1 Задание

// const text = document.querySelector('h1').innerText = 'color';
// const color = document.querySelector('body').style.backgroundColor = '';

// const user = prompt('Введите цвет фона страницы на английском языке');

// if (user == "red") {
//     document.querySelector('body').style.backgroundColor = 'red';
//     document.querySelector('h1').innerText = 'фон изменён на: red';
// }else if (user == "blue") {
//     document.querySelector('body').style.backgroundColor = 'blue';
//     document.querySelector('h1').innerText = 'фон изменён на: blue';
// }else if (user == "green") {
//     document.querySelector('body').style.backgroundColor = 'green';
//     document.querySelector('h1').innerText = 'фон изменён на: green';
// }else {
//     document.querySelector('h1').innerText = ("Ошибка! Введите корректный цвет");
// }

// 2 Задание

const text = document.querySelector('h1').innerText = 'color';
const color = document.querySelector('body').style.backgroundColor = '';

const user = prompt('Введите цвет: ');

if (user == "Красный") {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('h1').innerText = 'STOP';
}else if (user == "Зелёный") {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('h1').innerText = 'GO';
}else if (user == "Жёлтый") {
    document.querySelector('body').style.backgroundColor = 'yellow';
    document.querySelector('h1').innerText = 'WAIT';
}else {
    document.querySelector('h1').innerText = ("Ошибка! Введите корректный цвет");
}