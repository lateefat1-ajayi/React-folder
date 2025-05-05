import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../../Redux/todoSlice'
import { deleteTodo } from '../../Redux/todoSlice'


const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
  return (
    <div>
     <ul>
     {todos.map(todo => (
        <li className='text-gray-800 mb-3 bg-white p-4 flex justify-between rounded-md'
         key={todo.id}>
        <span className={`cursor-pointer ${todo.completed? "line-through" : "no-underline"}`} onClick={() => dispatch(toggleTodo(todo.id))} >
                {todo.text}
            </span>
            <button className='bg-rose-400 border-black border p-1 text-center text-white rounded-md hover:-translate-y-1.5 duration-300 hover:bg-rose-500' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
    ))}
     </ul>
    </div>
  )
}

export default TodoList
