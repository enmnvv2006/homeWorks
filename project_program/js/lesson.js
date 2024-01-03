const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.computedStyleMap.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.computedStyleMap.color = 'red'
    }
}

// slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let indexForSlider = 0;
const hideTabContent = () => {
    tabContentBlocks.forEach(tabContentBlock => {
        tabContentBlock.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()    

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if(event.target === tab) {
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
        if (indexForSlider > tabContentBlocks.length - 1) {
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
    element.oninput = () => {
         const xhr = new XMLHttpRequest()
         xhr.open('GET','../data/converter.json')
         xhr.setRequestHeader('Content-type','application/json')
         xhr.send()

         xhr.onload = () => {
            const data = JSON.parse(xhr.response)

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
         }
    }
}

converter(som,usd,eur,'som')
converter(usd,som,eur,'usd')
converter(eur,som,usd,'eur')

// CARD SWITCHER

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')

let count = 1

fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(data => {
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    })

btnNext.addEventListener('click',() => {
    count++
    if (count > 200) {
        count = 1
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(data => {
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    })
})

btnPrev.addEventListener('click',() => {
    count--
    if (count < 1) {
        count = 200
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(data => {
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    })
})


fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response => response.json())
.then(data => {
    console.log(data);
})

// WEATHER

const cityNameInput = document.querySelector('.cityName')
const btnSearch = document.querySelector('#btn-search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')   

const BASE_URL = "http://api.openweathermap.org"
const API_KEY = "e417df62e04d3b1b111abeab19cea714"

btnSearch.addEventListener('click',() => {
    fetch(`${BASE_URL}/data/2.5/weather?q=${cityNameInput.value}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        city.innerHTML = data.name ? data.name : "Город не найден..."
        temp.innerHTML = data.main.temp ? Math.round(data.main.temp - 273.15) + '&deg;C' : "..."
    })
})
