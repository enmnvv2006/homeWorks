{
  /* 
  <li class="task">
    <input type="checkbox" />
    <span>ewfwe</span>
    <button>x</button>
  </li> 
*/
}

// <ul id="todo-list">
//   <li class="task">
//      <input type="checkbox" />
//      <span></span>
//      <button>x</button>
//   </li>
// </ul>



const inputCreateElement = document.querySelector('#todo-input');
const buttonCreateElement = document.querySelector('#todo-form button');
const todoListElement = document.querySelector('#todo-list');

buttonCreateElement.addEventListener('click', (event) => {
  event.preventDefault();

  const taskElement = document.createElement('li');
  todoListElement.append(taskElement);
  taskElement.setAttribute('class', 'task');

  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('type', 'checkbox');
  taskElement.append(checkboxElement);

  const spanElement = document.createElement('span');
  spanElement.textContent = inputCreateElement.value;
  inputCreateElement.value = '';
  taskElement.append(spanElement);

  const buttonElement = document.createElement('button');
  taskElement.append(buttonElement);
  buttonElement.innerText = 'x';
  
  buttonElement.addEventListener("click", () => {
    taskElement.remove()
  })

  checkboxElement.addEventListener("click",() => {
    if (checkboxElement.checked) {
      taskElement.setAttribute("class","completed")
      alert(`Задача ${spanElement.innerText} успешно выполнена.`)
    } else {
      taskElement.removeAttribute("class","completed")
    }
  })
  
});


