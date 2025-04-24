import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewDetails = () => {
    const {id} = useParams()
    const [loading , setIsLoading] = useState(true)
    const [product, setProduct] = useState(null)


    const fetchSingleProduct = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get
            (`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
            response.data.map((res) => {
                parseInt(res.id) === parseInt(id) ? setProduct(res) : null;
            });
            console.log(product)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }

     useEffect(() => {
        fetchSingleProduct()
      } ,[])

  return (
    <div className='lg:p-20 p-6 flex justify-center items-center bg-blue-100 min-h-screen'>
        {loading?( <div> Loading...</div>): 
        (  <div className='grid grid-cols-3 gap-8'>

            <img className='h-full w-full shadow-sm rounded-xl border bg-white p-5 col-span-1' src={product?.image} alt=""/>

                <div className='otherDetails col-span-2 flex flex-col gap-10'>

                    <div className='flex gap-2 items-start text-xl  font-semibold'>
                        <span className='text-xl text-black'> Title: </span>
                        {product?.title}
                    </div>

                    <div className='flex gap-2 items-start text-xl  font-semibold'>
                        <span className='text-xl  text-black'> Price:</span>
                        <p>
                        ${(product?.price * 0.9).toFixed(2)}
                        <sub className=' line-through font-normal text-gray-500'>
                        ${product?.price.toFixed(2)}
                        </sub>
                        </p>
                    </div>

                    <div className='flex gap-2 items-start text-xl  font-semibold'>
                        <span className='text-xl text-black'> Description:</span>
                        {product?.description}
                    </div>

                    <div className='flex gap-2 items-start text-xl  font-semibold'>
                        <span className='text-xl text-black'>Category:</span>
                        {product?.category}
                    </div>

                </div>
        </div>
            
        ) }
    </div>
  )
}

export default ViewDetails
