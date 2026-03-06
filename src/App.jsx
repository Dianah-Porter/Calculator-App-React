import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button text={'5'}/> */}
      <Calculator/>
    </>
  )
}

export default App
