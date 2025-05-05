import React from 'react'
import TodoInput from '../Components/todo/TodoInput'
import TodoList from '../Components/todo/TodoList'
import { ToastContainer } from 'react-toastify'

const Todo = () => {
  return (
    <div>
      <TodoInput/>
      <TodoList/>
      <ToastContainer/>
    </div>
  )
}

export default Todo
