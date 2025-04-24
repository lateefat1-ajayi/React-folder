import React from 'react'

const Package = ({ title, subtitle, subtitle1, unordered, list, list1, list2, list3, price, button, otherStyles, disc }) => {
  return (

    <div className={`px-10 py-5 flex flex-col gap-3 rounded-lg flex-wrap ${otherStyles}`}>
      <h2 className=' font-bold text-4xl md:text-2xl'> {title}</h2>
      <p className=''>{subtitle1}</p>
      <p className=''>{subtitle}</p>
      <p>{unordered}</p>
      <ul>  <li>
        <ul className={`gap flex flex-col list-disc text-wrap  ${disc}`}>
          <li>{list}</li>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
      </li>

      </ul>
      <h2 className='font-bold text-4xl md:text-2xl'>{price}</h2>
      <button className='px-2 py-2 w-[100px] text-center grid place-content-center items-center justify-center rounded-lg bg-primaryBlue'>{button}</button>
    </div>
  )
}

export default Package
