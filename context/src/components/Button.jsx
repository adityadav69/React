import React from 'react'
import Components1 from './Components1'
import { CountContext } from '../Context/CountContext'
import { useContext } from 'react'

const Button = () => {
    let countObj=useContext(CountContext)
  return (
    <div>
      <button onClick={() => countObj.setCount((count) => count + 1)}>Click me <span> <Components1/> </span></button>
    </div>
  )
}

export default Button
