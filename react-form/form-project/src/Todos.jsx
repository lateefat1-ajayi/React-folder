import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos, deleteTodo, handleComplete, updateTodo}) => {
  return (
    <div className='w-full max-w-md '>
      <h1 className='text-center font-bold text-2xl '>Todos</h1>
      
    {todos.length === 0 ?
    ( <p className='text-center text-gray-500'>No todo items found</p>) : 
    ( <ul>
       {todos.map((todo)=>(
        <TodoItem key={todo.id}
        todo={todo} 
        updateTodo={updateTodo}
        handleComplete={handleComplete} 
        deleteTodo={deleteTodo}
        />
       ))}
    </ul> )}
    </div>
  )
}

export default Todos
