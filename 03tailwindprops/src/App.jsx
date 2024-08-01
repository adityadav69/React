import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let channels=["Chai aur code","Code With Harry","Anuj Bhaiya"]

  return (
    <>
     <h1 className='bg-green-500 rounded-lg text-white p-3 mb-10'>Tailwind Test</h1>
    <Card channels={channels[0]}/>
    <Card channels={channels[1]} btnText="Visit Me"/>
    <Card channels={channels[2]} btnText="Go"/>
    </>
  )
}

export default App
