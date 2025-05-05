import React from 'react'
import Cart from '../Components/Cart/Cart'
import ProductList from '../Components/Cart/ProductList'


const Productpge = () => {
  return (
    <div>
        <h3 className='text-2xl font-bold m-1 text-center'>Shopping cart with redux</h3>
      <ProductList/>
      <Cart/>
    </div>
  )
}

export default Productpge