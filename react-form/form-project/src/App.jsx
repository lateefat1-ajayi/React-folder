import React, { useEffect, useState } from 'react'
import Todos from './Todos'


function App() {
  const [todos, setTodos] = useState([]);

  const [inputValue, updateInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storeTodos);
  }, []);

    const saveToLocalStorage = (item) => {
      localStorage.setItem("todos", JSON.stringify(item))
    }

    const handleInputChange = (e) => {
        updateInputValue(e.target.value);
    }

    const handleButtonClick = (e) => {
      e.preventDefault();

      if(inputValue.trim !== ""){
        setIsLoading(true);

        const newTodo = {
          id: new Date,
          text: inputValue,
          completed: false
        }

        const updatedTodo = [...todos, newTodo];
        setTodos(updatedTodo);

        saveToLocalStorage(updatedTodo);
        updateInputValue("");
        setIsLoading(false);
      }

    }

    const updateTodo = (id, newText)=>{
      const updatedTodo = todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo);
      setTodos(updatedTodo);
      saveToLocalStorage(updatedTodo);
    }

    const deleteTodo = (id) =>{
      const updatedTodo = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodo);
      saveToLocalStorage(updatedTodo);
    }
    const handleComplete =(id) =>{
      const updatedTodo = todos.map((todo)=> todo.id === id ? {...todo, completed: true} : todo);

      setTodos(updatedTodo);
      saveToLocalStorage(updatedTodo);
    }

  return (
    <div className='flex flex-col items-center justify-center bg-slate-300 p-4 min-h-screen'>
      <h1 className='text-3xl font-extrabold mb-4'>
        Todo list
      </h1>
      <form className='mb-6 flex gap-3'>

        <input value={inputValue} onChange={handleInputChange} className='border border-gray-500 outline-none p-2 rounded'
        type="text" placeholder='Enter a to do item..' id="" />

      <button className='rounded p-2 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-500 '
       onClick={handleButtonClick}>
       {isLoading? "Adding...": "Add To do"}
      </button>
      </form>
      <Todos todos={todos} handleComplete={handleComplete} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
