import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClipBoard from './Pages/ClipBoard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Regpage from './Pages/Regpage'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div>

      <div className='flex gap-8'>
      <ClipBoard/>
       <Link className='bg-emerald-400 rounded-md p-2 border' to="/reg">RegPage</Link>
      </div>
     
    <Routes>
      <Route path='/reg' element={<Regpage/>} />
    </Routes>
    <ToastContainer/>
    </div>
  )
}

export default App
