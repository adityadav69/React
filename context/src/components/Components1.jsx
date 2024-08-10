import React, { useContext } from 'react'
import { CountContext } from '../Context/CountContext'

const Components1 = () => {
    let countObj=useContext(CountContext)
  return (
    <div>
      <p>{countObj.count}</p>
    </div>
  )
}

export default Components1
