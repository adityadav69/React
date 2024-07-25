import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] =useState(14)
  const addvalue=()=>{
    console.log("clicked",counter);
    // counter=counter+1;
    if(counter<20)
    setCounter(counter+1)
  }
  const removeValue=()=>{
    console.log("clicked",counter);
    // counter=counter-1;
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
  <p>value is {counter}</p>
  <button
  onClick={addvalue}
  >Add value{counter}</button>
  <button
  onClick={removeValue}
  >Remove value{counter}</button>
    </>
  )
}

export default App
