// Первое Задание

let arr = [10, 20, 30, 50, 235, 3000];

for (let index = 0; index < arr.length; index++) {
    let element = String(arr[index]);
    if (element[0] == 1 || element[0] == 2 || element[0] == 5) {
        console.log(element);
    }
}

// Второе задание 

let nums = 0

for (let index = 20; index >= nums; index--) {
    console.log(index);
    
}

// 3 Задание 

const svetofor = prompt("введите цвет: ")

let colors = {
    red: "стоп",
    orange: "предупрждение",
    green: "можете ехать"
}

if (svetofor == "красный") {
    alert(colors.red)
}else if (svetofor == "оранжевый") {
    alert(colors.orange)
}else if (svetofor == "зелёный") {
    alert(colors.green)
}else {
    alert("Пишите цвета светафора")
}