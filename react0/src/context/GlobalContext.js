import React from 'react'
import { useState,useContext,createContext } from 'react'

export const ColorContext=createContext()

function ColorContextProvider({children}) {
    const [color,setColor]=useState("red")
  return (
    <ColorContext.Provider value={{color,setColor}}>{children}</ColorContext.Provider>
  )
}

export default ColorContextProvider