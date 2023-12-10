// 1 part

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const regExp = /^([\w\.])+\@gmail\.com$/i;
gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}


// 2 part
const parentFreeWidth = 449
const moveSpeedChildBlock = 10

let positionX = 0
let positionY = 0

const redBlock = document.querySelector('.child_block')

const moveBlock = () => {
    if (positionX < parentFreeWidth && positionY === 0) {
        positionX++
        redBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }else if (positionX >= parentFreeWidth && positionY < parentFreeWidth) {
        positionY++
        redBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }else if (positionX >= 1 && positionY >= parentFreeWidth) {
        positionX--
        redBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }else if (positionX >= 0 && positionY > 0) {
        positionY--
        redBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }
}
moveBlock()

// 2 Homework

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const secondsS = document.querySelector('#secondsS')

let interval;
let seconds = 0

const starter = () => {
    if(seconds < Infinity) {
        seconds++
        secondsS.innerHTML = seconds
    }
}

start.addEventListener('click', () => {    
    clearInterval(interval)
    interval = setInterval(starter, 1000);
})

stop.addEventListener('click', () => {       
    clearInterval(interval)
})

reset.addEventListener('click', () => {
    clearInterval(interval)
    seconds = 0
    secondsS.innerHTML = '0'
})