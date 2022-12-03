import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import TodoList from './components/TodoList';

const useTodoListState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'))
    return savedTodoList || []
  })

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useTodoListState()

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  // TODO: Write this function out to edit a todo list item
  const editTodo = (todo) => {
    // some logic needs to go here
  }

  // TODO: Write this function out to remove a todo list item
  const removeTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Todo List</h1>
        <Routes>
          <Route exact path='/' element={<TodoList todoList={todoList} onRemoveTodo={removeTodo} />} />
          <Route caseSensitive path='/newTodo' element={<AddTodoForm onAddTodo={addTodo} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
