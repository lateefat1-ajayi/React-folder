import React,{ useState }from 'react'
import  { InputChange, Counter, Calculator, Calc } from './counter'

const App = () => {

  const [count, setCount] = useState(0);

  const increase = () => setCount(count +1);
  const decrease = () => setCount(count -1);

  return (
    <div className='flex flex-col justify-center items-center space-y-10'>
      <Counter count={count} increase= {increase} decrease= {decrease}/>
      <InputChange/>
      <Calculator/>
      <Calc/>
    </div>
  )
}

export default App
