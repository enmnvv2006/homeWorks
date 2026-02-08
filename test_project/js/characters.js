const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/characters.json')
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send()

xhr.onload = () => {
    const data = JSON.parse(xhr.response)
    const charactersContainer = document.querySelector('.characters')
    const container = document.createElement('div')
    container.className = 'container'

    data.forEach(character => {
        const characterElement = document.createElement('div')
        characterElement.className = 'character'
        characterElement.innerHTML = `
            <div class="character__inner">
                <div class="character__front">
                    <img src="${character.photo}" alt="${character.name}" class="character__image">
                    <div class="character__info">
                        <h3 class="character__name">${character.name}</h3>
                        <p class="character__age">Возраст: ${character.age}</p>
                        <p class="character__bio">${character.bio}</p>
                    </div>
                </div>
            </div>
        `
        container.appendChild(characterElement)
    })
    charactersContainer.appendChild(container)
}