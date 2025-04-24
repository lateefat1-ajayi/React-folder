import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NumberBox from './Pages/NumberBox'


const App = () => {
  return (
    <div className=' bg-primarycolors h-full md:px-20 px-6 '>
    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/numberbox' element={ <NumberBox/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
