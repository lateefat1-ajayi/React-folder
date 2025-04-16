import React, { useState } from 'react'

const Counter = ({count,increase,decrease}) => {

    
    const reset = () => setCount((prev) => prev = 0);

  return (
    <div className='gap-3 flex flex-col items-center justify-center h-[100%]'>
      <h1 className='flex justify-center items-center bg-emerald-200 mt-[20px]  text-[30px] rounded-md py-2 px-4'> Count: {count}</h1>

    <div className='gap-2 flex'>
    <button className='bg-blue-400 p-2 rounded-xl' onClick={increase}>Increase</button>
      <button className='bg-red-300 p-2 rounded-xl' onClick={decrease}> Decrease</button>
      <button className='bg-green-400 p-2 rounded-xl' onClick={reset}> Reset</button>
    </div>

    </div>
  )

}


const InputChange = () => {

    const [value , setValue] = useState("");

    const handleInputChange = (e) => setValue (e.target.value);
    
    return(
        <div className='h-[100%] space-y-6 '>
            <h1>You typed: {value}</h1>
            <input className='border-2 border-black' type="text" value={value} onChange={handleInputChange} placeholder='Type here..' />
        </div>
    )

}


const Calculator = () => {
    
    // const [value , setValue] = useState(0);
    const  [input1, setInput1] = useState(0);
    const  [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);


    const addition = () => setResult( parseInt(input1) + parseInt(input2) );
    const subtraction = () => setResult( parseInt(input1) - parseInt(input2));
    const multiplication = () => setResult( parseInt(input1) * parseInt(input2));
    const division = () => setResult( parseInt(input1) / parseInt(input2));
    const reset = () => setResult((prev) => prev = 0);
    

    const handleinput1 = (e) => setInput1(e.target.value);
    const handleinput2 = (e) => setInput2(e.target.value);
    
     return(
        <div className='gap-2 flex flex-col text-center bg-blue-300 p-11'>
             <h1 className='font-bold bg-zinc-100 p-2 rounded-sm'>Calculator</h1>
             
            <h1>Result = {result}</h1>
            <input type="number" className='border-2 border-black text-center' placeholder='input one' onChange={handleinput1} name="" id="" />
            <input type="number" className='border-2 border-black text-center' placeholder='input one' onChange={handleinput2} name="" id="" />

            <div className='flex gap-2'>
            <button className='bg-green-400 px-2 rounded-sm' onClick={addition}>+</button>
            <button className='bg-red-400 px-2 rounded-sm' onClick={subtraction}>-</button>
            <button className='bg-teal-500 px-2 rounded-sm' onClick={multiplication}>*</button>
            <button className='bg-emerald-600 px-2 rounded-sm' onClick={division}>/</button>
            <button className='bg-blue-400 px-2 rounded-sm' onClick={reset}>Reset</button>
            </div>
        </div>
     )
}


const Calc = () => {
    const [value, setValue] = useState([]);
    const [result, setResult] = useState(0);

    const handleInputChange = (e) => {

        const inputValue = e.target.value;

        const inputValueArr = inputValue?.split('');

       

        const filteredInputValueArr = inputValueArr?.filter(
            (item) => item !== "," && item !== " "
        );

        setValue(() => {
            if (filteredInputValueArr?.length === 2){
                return filteredInputValueArr;
            } else if (filteredInputValueArr?.length > 3){
                alert ("you can't input more than two")
            }
               
        })
    }
    
     const handleAddSub = (e) => {
        
        if(e.target.name === "add"){
            setResult(() => {
            if(value?.length != 0){
                return parseInt(value[0]) + parseInt(value[1])
            }
        })
            
        }else if (e.target.name === "sub"){
            setResult(() => {
                        if(value?.length != 0){
                            return parseInt(value[0]) - parseInt(value[1])
                        }
                    })
        }
     }

     const clear = () => setResult((prev) => prev = 0);
    return(
        <div className='h-[100%] flex flex-col bg-emerald-200 p-11  space-y-6 items-center justify-center'>
            <h1 className='font-bold bg-zinc-100 p-2 rounded-sm'>Calc</h1>
            <h2>Result: {result}</h2>

        <input className='border-2 border-black text-center' type="text" placeholder='Type here' value={value} onChange={handleInputChange} />

        <button className='bg-green-600 px-2 rounded-sm' name='add' onClick={handleAddSub}>Add</button>
        <button className='bg-blue-600 px-2 rounded-sm' name='sub' onClick={handleAddSub}>Sub</button>
        <button className='bg-red-600 px-2 rounded-sm'  onClick={clear}>Clear</button>
        </div>
    )
}

export {Counter, InputChange, Calculator, Calc}
