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

// move block

const childBlock = document.querySelector(".child_block");

let num = 0

const move = () => {
  if (num < 448) {
    num++;
    childBlock.style.left = `${num}px`;
    requestAnimationFrame(move);
  }
};

move();
