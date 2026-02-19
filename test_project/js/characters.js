const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        const charactersContainer = document.querySelector('.characters')
        const container = document.createElement('div')
        container.className = 'container'
        const postImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'

        data.forEach((post) => {
            const postElement = document.createElement('div')
            postElement.className = 'character'
            postElement.innerHTML = `
                <div class="character__inner">
                    <div class="character__front">
                        <img src="${postImage}" alt="Post image" class="character__image">
                        <div class="character__info">
                            <h3 class="character__name">${post.title}</h3>
                            <p class="character__bio">${post.body}</p>
                        </div>
                    </div>
                </div>
            `
            container.appendChild(postElement)
        })

        charactersContainer.appendChild(container)
    } catch (error) {
        console.error('Ошибка при загрузке posts:', error)
    }
}

getPosts()
