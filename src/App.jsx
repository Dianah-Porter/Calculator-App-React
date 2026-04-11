import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Button from './Button'
import ProductList from './components/Practical1Uk'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'

function App() {
      <nav className=''>
      <Link to='/' end>Calculator</Link>
      <Link to='/search'>ListSearch</Link>
      </nav>
      
      
  return (
    
    <Routes>
      <Route path='/' element={<Calculator/>}/>
      <Route path='/search' element={<ProductList/>}/>
    </Routes>
      // {/* <Button text={'5'}/> */}
  )
}

export default App
