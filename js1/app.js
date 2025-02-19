var svet = prompt("Введите цвет светофора: ")
if (svet == "красный") {
    console.log("Остановитесь!");
}else if (svet == "желтый") {
    console.log("Приготовьтесь!");
}else if (svet == "зеленый") {
    console.log("Можно ехать!");
}else {
    console.log("Ошибка: некорректный цвет светофора.");
}
