// PART 1

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

// PART 2

const parentFreeWidth = 449
const moveSpeedChildBlock = 10

let positionX = 0
let positionY = 0

const redBlock = document.querySelector('.child_block')

const increment = () => {
    if(positionX < parentFreeWidth){
        positionX++
        redBlock.style.left=`${positionX}px`
        setTimeout(increment,moveSpeedChildBlock )
    }
}

increment()