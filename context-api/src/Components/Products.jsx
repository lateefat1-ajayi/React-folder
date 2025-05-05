import React from 'react'
import { useProduct } from '../Context/ProductContext'
import { Link } from 'react-router-dom';
import Confirm from './Confirm';

const Products = () => {

  const {products, loading, deleteId, setDeleteId, deleteProduct } = useProduct();
  const handleDeleteClick = (id) => {
      setDeleteId(id)
  }

  const confirmDelete = (id) => {
      deleteProduct(id)
      setDeleteId(null)
  }

  const cancelDelete = () => {
    setDeleteId(null)
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-2xl font-bold mb-6'>Product List</h2>

      {loading && <p className='text-center mb-4'>Loading....</p>}
      {!loading && products.length === 0 && (
        <p className='text-center text-gray-500'>No products found</p>
      )}

      <div className='space-y-4'>
        {
          products.map((product) => (
            <div key={product.id} className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-300'>
              {product?.images && product?.images.length && (
                <img src={product?.images[0]} alt={product?.title} className='h-48 w-full rounded object-cover mb-4' />
              )}
              <h3 className='text-lg font-semibold mb-2'>{product?.title}</h3>
              <p className='text-gray-600 text-sm mb-2'>{product?.description}</p>
              <p className='text-lg font-bold mb-2'>{`$${product?.price}`}</p>

              <div className='flex justify-between'>
                <Link to={`/edit/${product?.id}`} className='px-4 py-2 bg-blue-500 text-center text-white rounded hover:bg-blue-600'>Edit</Link>
                <button onClick={() => handleDeleteClick(product?.id)} className='px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600'>Delete</button>
              </div>
            </div>
          ))}
      </div>
      <Confirm isOpen={!!deleteId} onConfirm={()=>confirmDelete(deleteId)} onCancel={cancelDelete} />
    </div>
  )
}

export default Products