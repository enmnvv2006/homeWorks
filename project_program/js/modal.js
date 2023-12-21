    const modal = document.querySelector('.modal')
    const modalTrigger = document.querySelector('#btn-get')
    const modalCloseButton = document.querySelector('.modal_close')

    const openModal = () => {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }

    modalTrigger.onclick = () => openModal()
    modalCloseButton.onclick = () => closeModal()
    modal.onclick = (event) => {
        if(event.target === modal) {
            closeModal()
        }
    }

    // var options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1.0
    // }

    // var callback = () => { 
    //     openModal()
    //     observer = null;
    // };


    // var observer = new IntersectionObserver(callback, options);

    // var target = document.querySelector('.footer');
    // observer.observe(target);

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