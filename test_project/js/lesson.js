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