const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regEx = /(?!\.)(?!.*\.\.)([a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*)@(gmail\.com)$/g

gmailButton.addEventListener('click', () => {
  if (regEx.test(gmailInput.value)) {
    gmailResult.style.color = 'green';
    gmailResult.innerHTML = 'Gmail is valid';
  } else {
    gmailResult.style.color = 'red';
    gmailResult.innerHTML = 'Gmail is invalid';
  }
});

// timer

const time = document.querySelector("#seconds")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")

let timerId = 0
let running = false

const timer = () => {
if (!running) {
  running = true

  timerId = setInterval(() => {
  time.innerHTML++
}, 1000)
}
}

startBtn.addEventListener("click",() => {
  timer()
})

stopBtn.addEventListener("click", () => {
  clearInterval(timerId)
  running = false
})

resetBtn.addEventListener("click", () => {
    clearInterval(timerId)
    time.innerHTML = 0
    running = false
})


