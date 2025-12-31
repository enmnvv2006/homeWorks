// 1 Задача

// const incrementButton = document.querySelector("#increment")
// const decrementButton = document.querySelector("#decrement")
// const number = document.querySelector("#num")

// incrementButton.addEventListener("click",() => {
//     number.style.color = "green"
//     number.innerHTML++
// })
// decrementButton.addEventListener("click",() => {
//     number.style.color = "red"
//     number.innerHTML--
//     if (number.innerHTML < 0) {
//         number.innerHTML = 0
//     }
// })

// 2 Задача

// const coordinat = document.querySelector(".block")

// coordinat.addEventListener("mousemove",(event) => {
//     console.log('X:', event.clientX, 'Y:', event.clientY);
    
// })

// 3 Задача

const color = document.querySelector("input")

color.addEventListener("input",() => {
    if (color.value == "red") {
        document.body.style.backgroundColor = "red"
    } else if (color.value == "green") {
        document.body.style.backgroundColor = "green"
    } else if (color.value == "blue") {
        document.body.style.backgroundColor = "blue"
    } else {
        document.body.style.backgroundColor = "white"
    }
    })