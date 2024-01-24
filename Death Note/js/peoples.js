const xhr = new XMLHttpRequest()
xhr.open('GET','peoples.json')
xhr.setRequestHeader('Content-type','application/json')
xhr.send()

xhr.addEventListener('load',() => {
    const peoples = JSON.parse(xhr.response)
    const personsWrapper = document.querySelector('.persons')

    peoples.forEach((person) => {
        const personCard = document.createElement('div')
        personCard.setAttribute('class', 'personCard')
        personCard.innerHTML = `
        <div class="personImage">
            <img src="${person.photo}" alt="">
        </div>
        <p>${person.name}</p>
        <p>Age: ${person.age}</p>
    `
        personsWrapper.append(personCard)
    });
})
