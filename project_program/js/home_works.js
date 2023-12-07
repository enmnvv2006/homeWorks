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

const redBlock = document.querySelector('.child_block')

let nums = 0

const counter = () => {


    nums++
    if(nums < 449) {
        counter()
    }
    redBlock.style.left = `${nums}px`
};


counter()






