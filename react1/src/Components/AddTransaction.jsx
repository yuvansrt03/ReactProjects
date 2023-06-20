import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/GlobalState'
function AddTransaction() {
    const {addTransaction} =useContext(AppContext)
    // console.log(addTransaction)
    const [name,setName]=useState("")
    const [amount,setAmount]=useState(0)
    const handlechangeName=(e)=>{
        setName(e.target.value);
    }
    const handlechangeAmount=(e)=>{
        setAmount(e.target.value)
    }
    const handleSubmit=e=>{
        const newTransaction={
            id:Date.now(),
            name:name,
            amount:amount
        }
        addTransaction(newTransaction)
    }
  return (
    <>
    <div className='w-full flex flex-col mt-8'>
          <h2 className='text-xl font-bold'>Add new Transaction</h2>
          <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
          <h4 className='text-sm font-bold mt-2'>Text</h4>
          <input onChange={handlechangeName} type="text" placeholder="Enter text..." className='h-[25px] p-4 border-2 mt-2 w-full text-sm focus:outline-none focus:border-black'/>
          <h2 className='text-sm font-bold mt-3'>Amount</h2>
          <h3 className='text-sm font-bold'>(negative -, Positive +)</h3>
          <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
          <input onChange={handlechangeAmount}type="text" placeholder="Enter amount..." className='h-[25px] p-4 border-2 mt-2 w-full text-sm focus:outline-none focus:border-black'/>
    </div>
    <button className='w-full h-[40px] p-1 my-5 box-border bg-purple-600 text-white text-sm' onClick={handleSubmit} >Add Transaction</button>
    </>

  )
}

export default AddTransaction