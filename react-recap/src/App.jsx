import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import BodyLayout from './components/BodyLayout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Students from './pages/Students';
import About from './pages/About';
import ProductList from './Pages2/ProductList';

const App = () => {
  const [active, setActive] = useState(true);
  
  return (
    <div>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/body' element={<BodyLayout/>}>
        
        <Route path='/body/dashboard' element={<Dashboard/>}/>
        <Route path='/body/about' element={<About/>}/>
        <Route path='/body/students' element={<Students/>}/>
        </Route>
        <Route path='/products' element={<ProductList/>}/>
      </Routes>
    </div>
  )
}

export default App
