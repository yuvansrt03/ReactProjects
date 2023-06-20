import React, {  } from 'react'
import Todos from './Todos'
import { useState } from 'react'
function App() {
  const [alltodos,setAllTodos]=useState([])
  const [curtodo,setCurTodo]=useState('')
  function handleChange(e){
    setCurTodo(e.target.value)
  }
  function removetodo(id){
    setAllTodos(alltodos.filter(item=>item.id!==id))
  }
  function handleSubmit(e){
    e.preventDefault();
    const TODO={
      id:Date.now(),
      text:curtodo
    }
    setAllTodos(old=>[...old,TODO]);
    setCurTodo("");
  }
  // useEffect(()=>{
  //   console.log(alltodos)
  // })
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="w-[300px] flex justify-center items-start m-10 flex-col">
        <h1 className='w-full my-3 text-center'>TODO APP</h1>
        <form action="" onSubmit={handleSubmit} className='w-full'>
          <input type="text" 
            placeholder='Enter todo...' 
            value={curtodo}
            onChange={handleChange} 
            className='w-full p-1 text-gray-700 border-2 outline-none focus:outline-none focus:border-black' />
          </form>
        <Todos alltodos={alltodos} removetodo={removetodo}></Todos>
      </div>
    </div>
  )
}

export default App