import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Addproduct from './Components/Addproduct'
import Editproducts from './Components/Editproducts'



const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 '>
      <nav className='bg-blue-600 p-4 mb-6 '>
        <div className='max-w-6xl mx-auto flex justify-between'>
          <Link to="/" className='text-white text-2xl font-bold'> Products App</Link>
          <Link to="/add" className='bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-50 '>Add Products</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/add' element={<Addproduct/>}/>
        <Route path='/edit/:id' element={<Editproducts/>}/>
      </Routes>
    </div>
  )
}

export default App
