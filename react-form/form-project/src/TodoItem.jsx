import React, { useState } from 'react'
// import Todos from './Todos'

const TodoItem = ({todo, deleteTodo, handleComplete, updateTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text)

const handleEdit = () =>{
    setIsEditing(true)
}

const handleCancel = () =>{
    setEditText(todo.text);
    setIsEditing(false);
}

const handleSave = () =>{
   if(editText.trim() !== ""){
    updateTodo(todo.id, editText)
   }
    setIsEditing(false);
}

const handleDelete = () =>{
    deleteTodo(todo.id)
}


  return (
    <li className='bg-white p-4 border  border-gray-500 mb-2 rounded shadow flex justify-between items-center'>
      {isEditing? 

     ( <div className='flex-1 mr-2'>
        <input type="text" 
        className="border-gray-500  border p-2 outline-none w-full rounded" 
         value={editText}
          onChange={(e) => setEditText(e.target.value)} />
      </div>)
      :(
        <>
        <input 
        className='w-4 h-4 border-gray-400'
        type="checkbox" checked={todo.completed}
         onChange={()=> handleComplete(todo.id)}/>

         <span className={todo.completed? "line-through text-gray-400" : ""}>
            {todo.text}
         </span>
        </>
    )}

    <div className='flex space-x-2'>
        {isEditing? (
            <>
            <button className='bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-white' onClick={handleSave}>Save</button>

            <button className='bg-gray-500 px-3 py-1 rounded hover:bg-gray-600 text-white' onClick={handleCancel}> Cancel</button>
            </>
        ) : (

            <>
            <button className='bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 text-white' onClick={handleEdit}>Edit</button>

            <button className='bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white' onClick={handleDelete}> Delete</button>
            </>

        )}
    </div>
    </li>
  )
}

export default TodoItem
