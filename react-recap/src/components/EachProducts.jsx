import React from 'react'

const EachProducts = ({product}) => {
  return (
    <div className='h-80 w-80 bg-slate-500 rounded-xl flex flex-col items-center justify-center'>
      <img className='h-40 w-40 bg-white rounded-sm'  src={product.images} alt="" />
      <div>
        <p className='font-bold text-white'>{product.title}</p>
      </div>
      <div>
        <p className='font-bold text-white'>Category: {product.category}</p>
      </div>
      <div>
        <p className='font-bold text-white'>Brand: {product.brand}</p>
      </div>

    </div>
  )
}

export default EachProducts
