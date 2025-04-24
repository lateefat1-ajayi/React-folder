import React from 'react'

const NumberBox = () => {

  function isPrime(num) {

    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
      if (num % i === 0) return false;

    }
      return true;
  }
   
  const numbers = [];


  for(let i = 0; i <= 100; i++ ){
    numbers.push(i);
  }

  function getColor(num) {
    if (isPrime(num)) return "bg-red-500";
    if (num % 2 === 0) return "bg-green-400";
    return "bg-yellow-400";
  }

  const totalPrime = [];
  const totalEven = [];
  const totalOdd = [];

  numbers.forEach((nums)=> {
    if (isPrime(nums)){
      totalPrime.push(nums)
    }else if(nums % 2 === 0){
        totalEven.push(nums)
    }else{
      totalOdd.push(nums)
    }
  })
console.log(totalOdd.length, totalEven.length,totalPrime.length)



  return (
    <div className=' flex flex-wrap gap-6 items-center p-6 text-center justify-center'>
  <p className='font-bold text-3xl'>{`the total numbers below are ${numbers.length}, which has ${totalEven.length} even numbers,  ${totalOdd.length} odd numbers,  ${totalEven.length} even numbers,  ${totalPrime.length} prime numbers `}</p>
      {numbers.map((num, index)=> (
        <div className={` ${getColor(num)} bg-blue-300 text-2xl text-center grid place-content-center text-white rounded-lg h-20 w-20 font-bold`}
        key={index}>
          {num}
          </div>
      ))}
       
     </div>
  )
}

export default NumberBox
