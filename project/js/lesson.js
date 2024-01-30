const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'blue'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let indexForSlider = 0;
const hideTabContent = () => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none'
    })
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index= 0) => {
    tabContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if(event.target === tabItem) {
                hideTabContent()
                indexForSlider = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}

const autoSlider = () => {
    setInterval(() => {
        indexForSlider++
        if (indexForSlider > tabContents.length - 1) {
            indexForSlider = 0
        }
        hideTabContent()
        showTabContent(indexForSlider)
    }, 3000)
}

autoSlider()

// converter

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element,targetElement,targetElement2,current) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
                switch (current) {
                    case 'som':
                        targetElement.value = (element.value / data.usd).toFixed(2)
                        targetElement2.value = (element.value / data.eur).toFixed(2)
                        break
                    case 'usd':
                        targetElement.value = (element.value * data.usd).toFixed(2)
                        targetElement2.value = (element.value * data.usd / data.eur).toFixed(2)
                        break
                    case 'eur':
                        targetElement.value = (element.value * data.eur).toFixed(2)
                        targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
                        break
                    default:
                        break
                }
        } catch (error) {
            console.log(error);
        }
}}

converter(som,usd,eur,'som')
converter(usd,som,eur,'usd')
converter(eur,som,usd,'eur')

// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1

const cardFetcher = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">
                    ${data.completed}
                </p>
                <span>${data.id}</span>
            `
    }catch (error) {
        console.log(error);
    }
}



btnNext.onclick = () => {
    count++
    if(count > 200) {
        count = 1
    }
    cardFetcher(count)
}

btnPrev.onclick = () => {
    count--
    if(count < 1) {
        count = 200
    }
    cardFetcher(count)
}

cardFetcher(count)

// PART 2

const asyncLog = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data);
}

asyncLog()

// WEATHER

const cityNameInput = document.querySelector('.cityName')
const btnSearch = document.querySelector('#search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')   

const BASE_URL = "http://api.openweathermap.org"
const API_KEY = "e417df62e04d3b1b111abeab19cea714"

btnSearch.addEventListener('click',async () => {
    try {
        const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${cityNameInput.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data.name || "Город не найден..."
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273.15) + '&deg;C' : "..."
    } catch (error) {
        console.log(error);
    }
})