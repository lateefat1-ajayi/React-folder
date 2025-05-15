import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EachProducts from '../components/EachProducts';

const ProductList = () => {
   

        const [search, setSearch] = useState("");
        const [product, setProduct] = useState("");
        const [loading, setLoading] = useState(true);

    const url = `https://dummyjson.com/products/search?q=${search}`;

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setProduct(response.data);
            } catch (error) {
                console.log(error.message)
            }finally{
                setLoading(false);
            }
        }

        useEffect(() => {
            fetchProduct();
        }, [search])



  return (
    <div className='bg-blue-100 flex items-center justify-center '>
      <input type="text" onChange={(e) => setSearch(e.target.value)}/>

      <div className='flex flex-wrap items-center '>
        {loading ?
         (
            <div>
            Loading...
            </div>
         )
          : (
            <div className='flex flex-wrap items-center justify-center gap-4 p-6'>
               {product.products.map((product) => (
                 <EachProducts key={product?.id} product={product}/>
                ))}
            </div>
         ) 
        }
      </div>
    </div>
  )
}

export default ProductList
