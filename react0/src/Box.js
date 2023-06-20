import React from 'react'
import { useContext } from 'react';
import { ColorContext } from './context/GlobalContext';
function Box() {
    const {color}=useContext(ColorContext);
  return (
    <div style={{backgroundColor:color}} className="w-[200px] h-[400px] mt-10 border-2"></div>
  )
}

export default Box