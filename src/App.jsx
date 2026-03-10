import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Button from './Button'

function App() {
  const [current, setCurrent] = useState('0');
    function handleClick(value){
       setCurrent(value);
    }

  return (
    <>
      {/* <Button text={'5'}/> */}
      <Calculator handleClick={handleClick} current={current} />
    </>
  )
}

export default App
