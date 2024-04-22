import React from 'react'


const Todo = (props) => {
    console.log(props);
  return (
    <div>
        {props.array}
    </div>
  )
}

export default Todo