const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal) {
        closeModal()
    }
}

const scrollHandle = () => {
    scrollDistanceFromTop = window.scrollY;
    windowHeight = window.innerHeight;
    documentHeight = document.body.scrollHeight;
    
    if (scrollDistanceFromTop + windowHeight >= (documentHeight - 1)) {
        openModal()
        window.removeEventListener('scroll', scrollHandle);
    }
}



window.addEventListener('scroll', scrollHandle);


window.addEventListener('load', () => {
    setTimeout(() => {
        openModal()
    }, 10000);
});