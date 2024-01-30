const URL = 'https://jsonplaceholder.typicode.com/posts'
const dz = document.querySelector('.kanat')

const func = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(data => {
            const create = document.createElement('div')
            create.classList.add('card')
            create.innerHTML = `
            <div class="car">
                <div class="image"><img src="https://c4.wallpaperflare.com/wallpaper/189/144/893/cyber-science-fiction-digital-art-concept-art-cyberpunk-hd-wallpaper-preview.jpg" alt="image"></div>
                <h3 class="title">${data.title}</h3>
                <p class="body">${data.body}</p>
            </div>
            `
            dz.append(create)
        })
    }catch (error) {
        alert(error);
    }
}

func(URL)