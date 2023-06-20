import React, { useState } from 'react'

function App() {
    const [file,setFile]=useState()
    const handleSubmit=async(e)=>{
        const formData=new FormData()
        formData.append('image',file)
        const response = await fetch('http://localhost:5000/upload',{
            method: "POST",
            body:formData,
        })
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="file" />
        <button type='submit' onChange={e=>setFile(e.target.files[0])}>Submit</button>
    </form>
  )
}

export default App