import React, { useContext } from 'react'
import { useState } from 'react';
import { ColorContext } from './context/GlobalContext';
function InputField() {
    const {setColor}=useContext(ColorContext)
    function handleChange(e){
        setColor(e.target.value);
    }
  return (
    <input type="text" name="color" className='p-2 w-[200px] border-2' onChange={handleChange}/>
  )
}

export default InputField