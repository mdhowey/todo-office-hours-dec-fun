import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <div>
      {todoList.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            id={todo.id}
            item={todo.item}
            minutes={todo.minutes}
            onRemoveTodo={onRemoveTodo}
          />
        )
      })}
    </div>
  )
}

export default TodoList