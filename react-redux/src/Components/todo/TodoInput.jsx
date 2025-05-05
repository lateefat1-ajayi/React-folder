import React, { useState } from 'react'
import { addTodo } from '../../Redux/todoSlice';
import { useDispatch } from 'react-redux';
import { toast} from 'react-toastify';


const TodoInput = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
    const handleAdd = () => {
        if(text.trim()){
            dispatch(addTodo(text))
            toast.success("Added successfully!")
            setText("")
        }
    }

  return (
    <div className='flex gap-2.5 mb-4'>
      <input className='outline-none border p-2 rounded-md bg-blue-200 text-center' type="text" placeholder='Enter todo...' value={text} onChange={(e) => setText(e.target.value)} />

      <button className='bg-blue-500 border-black border p-2 text-center text-white rounded-md hover:-translate-y-1.5 duration-300 hover:bg-blue-700' onClick={handleAdd} > Add</button>
    </div>
  )
}

export default TodoInput
