import React, { useState } from 'react'
import axios from 'axios'

const IMAGE_API_KEY=import.meta.env.VITE_IMAGE_API_KEY

const Gallery = () => {

    const [query, setQuery] = useState("")
    const [images, setImages] = useState([])


    const searchImages = async () => {
        const response = await axios.get(
            `https://pixabay.com/api/?key=${IMAGE_API_KEY}&q=${query}&image_type=photo`
        );
        setImages(response.data.hits)
    }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">📸 Image Gallery</h1>

      <div className="flex justify-center gap-3 mb-10">
        <input
        className="px-4 py-2 w-72 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text" placeholder='search image...' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        onClick={searchImages}>search</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={img.webformatURL}
              alt={img.tags}
              className="w-full h-60 object-cover"
              
            />
            <p>{img.tags}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery