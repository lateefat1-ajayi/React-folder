import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Classwork = () => {
  const navigate = useNavigate()

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")

                const data = await response.json();
                setCountries(data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching countries", error)
                setLoading(false)
            }
        }
        fetchCountries()
    }, [])

    if(loading) return <p>Loading Countries........</p>

  return (
    <div className=' p-10 bg-slate-100 m-2 bg-[yello]'>
      <h1 className='text-center text-3xl font-extrabold mb-[10px]'>Country List</h1>
      <ul className='flex gap-4 flex-wrap items-center text-center '>
        {countries.map((country) => (
          
            <li key={country.cca3}>
                <p>{country.name.common}</p>
                <img src={country.flags.png} alt={country.name.common} className='w-[300px] h-[100px]' />
                <button onClick={() => navigate(`/Countrydetails/${country?.cca3}`)} className='border border-black bg-blue-200 mt'>Show details</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Classwork