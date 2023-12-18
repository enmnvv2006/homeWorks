// part 1

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

// part 2

const kanatsID = new XMLHttpRequest()
kanatsID.open('GET','kanat.json')
kanatsID.setRequestHeader('Content-type','application/json')
kanatsID.send()

kanatsID.addEventListener('load',() => {
    const dontKnow = JSON.parse(kanatsID.response)
    console.log(dontKnow);
})