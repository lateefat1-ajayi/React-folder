import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Todo from './Pages/Todo'
import Productpge from './Pages/Productpge'



const App = () => {
  return (
    < >
      <div className='bg-slate-200 flex items-center flex-col '>

      <div className='flex' >
        <Link className='bg-emerald-700 p-2 text-center text-white rounded-md' to="/todo">Todo</Link>
      </div>
        <Routes>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/products' element={<Productpge/>}/>
          
        </Routes>
      </div>
    </>
  )
}

export default App
