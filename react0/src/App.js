import React, { useContext, useState } from 'react'
import InputField from './InputField'
import { ColorContext } from './context/GlobalContext';
import ColorContextProvider from './context/GlobalContext';
import Box from './Box';
function App() {

  return (
    <>
    <ColorContextProvider>
    <div className="flex flex-col items-center justify-center w-screen">
        <Box></Box>
        <InputField></InputField>
    </div>
    </ColorContextProvider>
    </>
  )
}

export default App