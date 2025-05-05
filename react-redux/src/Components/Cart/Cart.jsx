import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/Cartslice';


const Cart = () => {
    const cartItems =  useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0 )

    return (
    <div className='flex bg-white shadow-md m-5  gap-2 rounded-xl w-full p-3 items-center justify-center flex-col'>
        <h1 className='font-bold text-orange-400 text-2xl mt-5 mb-2'>Cart🛒</h1>
      {cartItems.length === 0 && <p>No items in the cart</p> }

      {cartItems.map((item)=> (
        <div className='bg-green-100 p-4 rounded flex justify-between items-center gap-5 ' key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
            <button className='bg-rose-500 text-white p-1 rounded-md ' onClick={() => dispatch(removeFromCart(item.id))}> Remove</button>
        </div>
      ))}
      <h3 className='bg-blue-500 rounded-md p-1 m-2 font-semibold text-lg text-white'>Total: ${total}</h3>
    </div>
  )
}

export default Cart
