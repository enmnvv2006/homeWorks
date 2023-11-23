const reset = document.querySelector(".Reset")
const decrease = document.querySelector(".Decrease")
const increase = document.querySelector(".Increase")
const inpt = document.querySelector("input")

const colorSpread = () => {
    if(inpt.value > 0) {
        inpt.style.color = "green"
    }else if (inpt.value == 0) {
        inpt.style.color = "grey"
    }else if (inpt.value < 0) {
        inpt.style.color = "red"
    }
}  

decrease.addEventListener("click",() => {
    inpt.value++
    colorSpread()
})
increase.addEventListener("click",() => {
    inpt.value--
    colorSpread()
})
reset.addEventListener("click",() => {
    inpt.value -= inpt.value
    colorSpread()
})

