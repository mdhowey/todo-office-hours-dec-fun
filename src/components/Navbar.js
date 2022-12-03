import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/newTodo'>Add Todo</Link></li>
        <li><Link to='/'>Todo List</Link></li>
      </ul>
      <div>
        <Link to='/' className='btn'>Login</Link>
        <Link to='/' className='btn'>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar