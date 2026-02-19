// 1 Задача

const extractNumbers = (str) => {
    const numbers = str.match(/\d+/g) || [];
    console.log(numbers);
    return numbers;
}

extractNumbers("a1fg5hj6")

// 2 Задача

// const printFibonacci = (a = 0, b = 1) => {
//     if (a > 144) {
//         console.log("все");
//         return;
//     }   

//     console.log(a);

//     setTimeout(() => {
//         printFibonacci(b, a + b);
//     }, 1000);
// };

// printFibonacci();

// 3 Задача

// const getPosts = async () => {
//     try {
//         const response = await fetch(`https://fakestoreapi.com/products`)
//         const data = await response.json()
        
//         data.forEach((item) => {
//             console.log(item.title);
//         });
//     } catch (error) {
//         console.error('Ошибка при загрузке posts:', error)
//     }
// }

// getPosts()

// 4 Задача

// const colorButtons = document.getElementById("color-buttons");

// colorButtons.addEventListener("click", (event) => {
//     document.body.style.backgroundColor = event.target.textContent;
// });

// 5 Задача

// const block = document.querySelector(".block-child");
// const btnBlock = document.querySelector("#btn-block");

// btnBlock.addEventListener("click", () => {
//     block.classList.toggle("hidden");
// });

// 6 Задача

// const counterElement = document.getElementById("counter");
// let counter = 0;

// const intervalId = setInterval(() => {
//     counter++;
//     counterElement.textContent = counter;

//     if (counter >= 100) {
//         clearInterval(intervalId);
//     }
// }, 1);

// 7 Задача

const getJson = document.querySelector("#get-json");

getJson.addEventListener("click", async () => {
    try {
        const response = await fetch(`../data.json`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка при загрузке JSON:', error);
    }
});