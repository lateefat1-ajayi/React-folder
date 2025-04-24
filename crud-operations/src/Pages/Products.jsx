import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Products = () => {
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [viewTitle, setViewTitle] = useState(false);
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)

    const fetchProduct = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data)
            setProduct(response.data)
            return response.data;
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async () => {
        try {
            await axios.get(`https://fakestoreapi.com/products/${deleteId}`)

            setProduct((prev) => prev.filter((p) => p.id !== deleteId));
            Swal.fire({
                icon: "Success",
                title: "Success",
                text: "Product deleted successfully"
            });
            setModal(!modal)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    const handleModal = (id) => {
        setDeleteId(id)
        setModal(!modal)

    }

    return (
        <div className='lg:p-20 p-6 bg-blue-100'>
            {/* Delete Modal */}
            <div className={`${modal ? "scale-100 flex" : "scale-0"}
               flex transition-all duration-500 left-0 top-0 ease-in-out fixed h-screen justify-center items-center bg-black/30 backdrop-blur-sm `}>

                <div className='fixed h-screen w-screen flex justify-center items-center top-0 left-0 bg-black/30 '>
                    <div className='bg-white shadow-md p-10 rounded-xl flex flex-col gap-10'>

                        <h1 className='text-center font-semibold text-2xl'>Are you sure you want to delete?</h1>

                        <div className='flex gap-10 justify-center items-center'>

                            <button onClick={() => setModal(!modal)} className='px-10 py-2 rounded-lg border-green-400 border text-black'> Cancel</button>

                            <button onClick={() => handleDelete()} className='px-10 py-2 rounded-lg bg-red-500 border-green-400 text-white'>Continue</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4'>

                {!loading ? (
                    product.map((product) => (
                        <div key={product.id} className={`eachCard bg-white hover:shadow-sm hover:shadow-black w-[15rem] ${viewTitle ? "h-[22rem]" : "h-[18rem]"} justify-center items-center rounded-xl flex flex-col gap-4 p-4`}>
                            <img className='w-20 h-20' src={product.image} alt="Product Image" />
                            <p onClick={() => setViewTitle(!viewTitle)} className={`w-full ${viewTitle ? "" : "truncate"} font-semibold text-center cursor-pointer`}>{product.title}</p>
                            <button onClick={() => navigate(`/product/${product.id}`)} className=' text-blue-400 text-sm hover:underline'>View details</button>
                            <button className='text-yellow-400'>Edit</button>
                            <button onClick={() => handleModal(product.id)} className='text-red-500 hover:underline'>Delete</button>


                        </div>
                    ))
                ) : (
                    <div className='text-xl h-screen flex items-center overflow-hidden justify-center w-screen text-black font-black'>
                        Loading...
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products



