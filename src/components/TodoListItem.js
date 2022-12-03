import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ item, minutes, onRemoveTodo, id }) => {
  return (
    <div className='todo__item-wrapper'>
      <div>
        <h3 className='todo__item-title'>{item}</h3>
        <h2 className='todo__item-minutes'>{minutes} minutes</h2>
      </div>
      <button onClick={() => onRemoveTodo(id)} className='danger'>Delete</button>
    </div>
  )
}

export default TodoListItem