import React from 'react'
import Weather from './Weather'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './Gallery'
import Users from './Users'


const App = () => {
  return (
    <div className='h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path='/weather' element={ <Weather/>}/>
        <Route path='/gallery' element={ <Gallery/>}/>
        <Route path='/users' element={ <Users/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
