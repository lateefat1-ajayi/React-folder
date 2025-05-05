import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
const ProductContext = createContext()

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true)
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=id,title,price,description,images')

            console.log({response: response.data});

           if (response?.data?.products.length){
            setProducts(response.data.products)
           }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
        
        getProducts()
    }, []);

    const addProduct = async (product) => {

        try {
            setLoading(true);
            const response = await axios.post('https://dummyjson.com/products/add', product);
            const newProduct = response?.data
            if(newProduct != {}){
                setProducts((prevProducts) => [...prevProducts, newProduct])
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
        
    }

    const editProduct = async (product) => {

        try {
            const response = await axios.put(`https://dummyjson.com/products/${product.id}`, product);

            const editedProduct = response.data;

            const mappedProduct = products?.map((product) => product.id === editedProduct?.id? editedProduct : product);
            setProducts(mappedProduct)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }  
    }

    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            const response = await axios.delete(`https://dummyjson.com/products/${id}`);
            const deletedProduct = response?.data;
            if (deletedProduct?.isDeleted) {
                setProducts((prev) => prev.filter((product)=> product.id !== deletedProduct?.id ))
            }

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

  return (
   <ProductContext.Provider value={{addProduct, editProduct, deleteProduct, setEditing,  setDeleteId, loading, editing, deleteId, products} }>
        {children}
   </ProductContext.Provider>
  );

};

export const useProduct = () => {
    return useContext(ProductContext)
}

export default ProductProvider;
