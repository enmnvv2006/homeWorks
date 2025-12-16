var a = Number(1)
var b = String("programming")
var c

console.log(c);
console.log(a == 1);
console.log(a != 1);
console.log(a * b);
console.log(typeof(a));
console.log(typeof(b));



var client = prompt("Напишите сумму вашей покупки: ")

if (client == typeof String) {
    console.log("Ошибка! Введите числовое значение.");
}

if (client < 100) {
    console.log("Скидки нет.");
}
else if (client >= 100 && client < 500) {
    console.log("Ваша скидка 5%.","Ваша сумма с вычетом скидки: ",client - (client * 0.05));
}
else if (client >= 500 && client < 1000) {
    console.log("Ваша скидка 10%.","Ваша сумма с вычетом скидки: ",client - (client * 0.10));
}
else if (client >= 1000) {
    console.log("Ваша скидка 15%.","Ваша сумма с вычетом скидки: ",client - (client * 0.15));
}
else {
    console.log("Неизвестнная ошибка.");
} 