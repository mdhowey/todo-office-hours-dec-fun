import React, { useState } from 'react'
import './AddTodoForm.css'

const AddTodoForm = ({ onAddTodo }) => {
  const [todoItem, setTodoItem] = useState('')
  const [todoMinutes, setTodoMinutes] = useState(null)

  const handleAddTodo = (e) => {
    e.preventDefault()

    const item = e.target.item.value
    const minutes = e.target.minutes.value
    onAddTodo({ id: Date.now(), minutes, item })

    setTodoItem('')
    setTodoMinutes(0)
  }

  const handleItemChange = (e) => {
    const newTodoItem = e.target.value
    setTodoItem(newTodoItem)
    
    console.log(e)
  }

  const handleMinuteChange = (e) => {
    const newTodoMinutes = e.target.value
    setTodoMinutes(newTodoMinutes)
  }

  return (
    <form onSubmit={handleAddTodo}>
      <h2>Add Todo Item</h2>
      <div className='form__ele-wrapper'>
        <label htmlFor='item'>Item</label>
        <input 
          name='item'
          id='item' 
          type='text' 
          value={todoItem}
          placeholder='Add todo here' 
          onChange={handleItemChange} 
        />
      </div>
      <div className='form__ele-wrapper'>
        <label htmlFor='time'># of Minutes</label>
        <input 
          name='time' 
          id='minutes'
          type='number'
          value={todoMinutes} 
          placeholder='Nubmer of minutes to complete task'
          onChange={handleMinuteChange}
        />
      </div>
      <div className='sub__btn-wrapper'>
        <input type='submit' className='btn' />
      </div>
    </form>
  )
}

export default AddTodoForm