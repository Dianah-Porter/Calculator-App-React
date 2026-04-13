import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Button from './Button'
import ProductList from './components/Practical1Uk'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import NameTransferLists from './components/NameTransfer'
import TouchTypingApp from './components/Practical3Uk'
import UserProfileDemo from './components/FetchUser'
// import TouchTypingApp from './components/TypingApp'

function App() {

  return (
    
  <>
  <UserProfileDemo/>
  <TouchTypingApp/>
  <NameTransferLists/>
  <ProductList/>
  <Calculator/>
   {/* <Button text={'5'}/> */}
  </>
    
  )
}

export default App
