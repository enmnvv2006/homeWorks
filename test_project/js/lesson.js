const phoneInput = document.querySelector('#phone_input');
const btn = document.querySelector('#phone_button');
const result = document.querySelector('#phone_result');

const regex = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/g;

btn.addEventListener('click', () => {
  if (regex.test(phoneInput.value)) {
    result.style.color = 'green';
    result.innerHTML = 'Phone is valid';
  } else {
    result.style.color = 'red';
    result.innerHTML = 'Phone is invalid';
  }
});

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentItemsParent = document.querySelector('.tab_content_items')

const hide = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = 'none'
    })

    tabContentItems.forEach((button) => {
        button.classList.remove('tab_content_item_active')
    })
}

const show = (i = 0) => {
  tabContentBlocks[i].style.display = 'block'
  tabContentItems[i].classList.add('tab_content_item_active')
}

hide()
show(0)

tabContentItemsParent.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        tabContentItems.forEach((button, index) => {
            if (button === event.target) {
                hide()
                show(index)
            }
        })
    }
}


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentItems.length - 1) {
            i = 0
        }
        hide()
        show(i)
    }, 3000)
}

autoSlider()

// ANY

const getAnyData = async () => {
    try {
        const response = await fetch('../data/any.json')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Ошибка при загрузке any.json:', error)
    }
}

getAnyData()

// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')


const converter = (element, target, num) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            if (element.id === 'som') {
                target.value = (element.value / data.usd).toFixed(2)
                num.value = (element.value / data.eur).toFixed(2)
            }

            if (element.id === 'usd') {
                target.value = (element.value * data.usd).toFixed(2)
                num.value = (target.value / data.eur).toFixed(2)
            }

            if (element.id === 'eur') {
                num.value = (element.value * data.eur).toFixed(2)
                target.value = ((element.value * data.eur) / data.usd).toFixed(2)
            }

            if (element.value === '') {
                target.value = ''
                num.value = ''
            }
        } catch (error) {
            console.error('Ошибка при загрузке converter.json:', error)
        }
    }
}

converter(somInput, usdInput,eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput,usdInput, somInput)

// Card switcher

const card = document.querySelector(".card")
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let cardId = 1

const showAPI = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        const { title, id, completed } = data
        const completedTitle = completed ? 'yes' : 'no'
        const completedColor = completed ? 'green' : 'red'

        card.innerHTML = `
        <p>${title}</p>
        <p style="color: ${completedColor}">
          ${completedTitle}
        </p>
        <span>${id}</span>
      `
    } catch (error) {
        console.error('Ошибка при загрузке TODO:', error)
    }
}

btnNext.onclick = () => {
    cardId++
    if(cardId > 200) {
        cardId = 1
    }
    showAPI()
}

btnPrev.onclick = () => {
    cardId--
    if(cardId < 1) {
        cardId = 200
    }
    showAPI()
}

showAPI()

// 2 Задание

const getPosts = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Ошибка при загрузке posts:', error)
    }
}

getPosts()
