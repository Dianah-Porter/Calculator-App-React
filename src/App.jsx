import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Button from './Button'
import ProductList from './components/Practical1Uk'

function App() {
  return (
    <>
      {/* <Button text={'5'}/> */}
      <ProductList/>
      <Calculator/>
    </>
  )
}

export default App
