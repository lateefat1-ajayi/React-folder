import React, { useEffect, useState } from 'react'

const Countries = () => {

    const [Countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("")

    useEffect(() => {
      

        const fetchCountries = async ( ) => {
            if(query.trim() === ""){
                setCountries([]);
                return;
            }
            setLoading(true)


            try {
                const response = await fetch (`https://restcountries.com/v3.1/name/${query}`);

               if(!response.ok){
                    setCountries([]);
               }else{
                const data = await response.json()
                setCountries(data);
               }

            } catch (error) {
                console.error("Error fetching countries", error)
                setCountries([]);
            }
           setLoading(false)
        }
        const delayDebounce = setTimeout(()=> {
            fetchCountries();
        },500)
        return () => clearTimeout(delayDebounce)

        
    },[query])



  return (
    <div className='flex flex-col h-screen gap-4 bg-blue-50 p-5'>
        <h1 className='text-center text-2xl font-bold font-sans '>Search For a Country</h1>
      <input className='w-[300px] text-center p-2 items-center place-self-center justify-center flex rounded-md border border-gray-700' type="text" placeholder='Enter a country name' value={query} onChange={(e)=> setQuery(e.target.value)} />

      {loading? 
      (
        <p>Loading...</p>
      )
      :Countries.length > 0? (
        <ul>
            {Countries.map((country) => (
                <li key={country.cca3}> {country.name.common}
                <ul>
                    <img src={country.flags.png} alt="" />
                </ul>
                </li>
            ))}
        </ul>
      )
      :query?
       (
        <p>No Countries found</p>
      ): null}

    </div>
  )
}

export default Countries
