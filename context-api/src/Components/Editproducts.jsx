import React, { useEffect, useState } from 'react'
import { useProduct } from '../Context/ProductContext'
import { useNavigate, useParams } from 'react-router-dom';


const Editproducts = () => {

  const{loading, editProduct, setEditing, editing, products} = useProduct();
  const {id} = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title : "",
    description: "",
    price: "",
    images : []
  });

  useEffect(() => {
    const existingProduct = products.find(p => p.id === Number(id));
    if(existingProduct){
      setProduct(existingProduct)
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedProduct = {...product, price: Number(product.price), images: [product.images]}
    await editProduct(product.id, editedProduct);
    navigate("/")
  }

  const handleChange = (e) =>{
    setProduct({...product, [e.target.name] : [e.target.value]})
  }

  return (
    <div className='max-3xl mx-aut0 p-10'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Edit products</h2>
      <form className='flex flex-col ' onSubmit={handleSubmit}>
        <input 
        type="text"
        name="title" 
        placeholder='Title'
        value={product.title}
        onChange={handleChange}
        required className='w-full p-2 border rounded'/>

        <input 
        type="number"
        name="price" 
        placeholder='Price'
        value={product.price}
        onChange={handleChange}
        className='w-full p-2 border rounded'/>

        <input 
        type="text"
        name="images" 
        placeholder='Image url'
        value={product.images}
        onChange={handleChange}
        required className='w-full p-2 border rounded'/>

        <button type='submit' disabled={loading} className='w-full py-2 text-white rounded bg-green-500 hover:bg-green-600'>
          {loading ? "Editing" : "Edit Product"}
        </button>
      </form>
    </div>
  )
}

export default Editproducts
