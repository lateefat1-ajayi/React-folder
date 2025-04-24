import React from 'react'
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
const Countrydetails = () => {
    const {code} = useParams();
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true)
        
    
        useEffect(() => {
            
            const fetchCountries = async () => {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    
                    const data = await response.json();
                    console.log(data)
                    setCountry(data[0])
                } catch (error) {
                    console.error("Error fetching countries", error)
                }
                setLoading(false)

            }
            fetchCountries()
        }, [code])

        if(loading) return <p>Is loading......</p>
        if(!country) return <p>Country not found</p>
  
        return (
        <div className='bg-blue-50 flex items-center text-center h-screen justify-center'>
        <ul>
        <li key={country.cca3}>
                <img className='rounded-full h-48 w-48' src={country.flags.png} alt="" />
                <p>{country.continents}</p>
                <p>{country.population}</p>
                
            </li>
        </ul>

          
    </div>
  )
}

export default Countrydetails
