import React, { Children } from 'react'
import { CountContext } from './CountContext'

const CountContextProvider=(Children)=>{
    return
     <CountContext.Provider>
        {Children}
</CountContext.Provider> 
}
export default CountContextProvider;