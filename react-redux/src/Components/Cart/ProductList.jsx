import React from 'react'
import { addToCart } from '../../Redux/Cartslice';
import { useDispatch } from 'react-redux';


const ProductList = () => {
    const products = [
        {id:1, name: "T-shirt", price: 20},
        {id:2, name: "Shoes", price: 50},
        {id:3, name: "Hat", price: 15},
        {id:4, name: "Sweater", price: 75},
    ];
    const dispatch = useDispatch();

  return (
    <div className=' flex flex-col gap-4 items-center justify-center  '>
        <h1 className=' font-bold text-2xl text-green-700'>PRODUCTS</h1>
        <div className='flex gap-3 '>

        {products.map((product)=> (
            <div className='bg-white flex flex-col p-5 rounded-md gap-2 font-semibold' key={product.id}>
                {product.name} - ${product.price}
                <button className='bg-green-500 text-white rounded-md' onClick={() => dispatch(addToCart(product))}> Add</button>
            </div>
        ))}
        </div>
      
    </div>
  )
}

export default ProductList
