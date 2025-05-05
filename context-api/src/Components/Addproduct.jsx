import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../Context/ProductContext';

const Addproduct = () => {

  const {addProduct, loading} = useProduct();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title : "",
    description: "",
    price: "",
    images : ""
  });

const handleChange = (e) => {
  const {name, value} = e.target;

  setProduct({...product, [name]: value});
}

const handelSubmit = async (e) => {
  e.preventDefault();

  await addProduct ({...product, price: Number(product.price), images :[product.images]})
  navigate("/")
}

  return (
    <div className='max-3xl mx-aut0 p-10'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Add products</h2>
      <form className='flex flex-col ' onSubmit={handelSubmit}>
        <input 
        type="text"
        name="title" 
        placeholder='Title'
        value={product.title}
        onChange={handleChange}
        required className='w-full p-2 border rounded'/>



        <input 
        type="text"
        name="description" 
        placeholder='Description'
        value={product.description}
        onChange={handleChange}
        required className='w-full p-2 border rounded'/>

        <input 
        type="number"
        name="price" 
        placeholder='Price'
        value={product.price}
        onChange={handleChange}
        required
        className='w-full p-2 border rounded'/>

        <input 
        type="text"
        name="images" 
        placeholder='Image url'
        value={product.images}
        onChange={handleChange}
        required className='w-full p-2 border rounded'/>

        <button type='submit' disabled={loading} className='w-full py-2 text-white rounded bg-green-500 hover:bg-green-600'>
          {loading ? "Adding" : "Add Product"}
        </button>
      </form>
    </div>
  )
}

export default Addproduct
