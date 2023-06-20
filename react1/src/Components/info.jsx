import React, { useContext } from 'react'
import { AppContext } from '../Context/GlobalState'
function Info() {
  const {transactions}=useContext(AppContext)
  const amount=transactions.map(item=>Number(item.amount));
  const totalIncome=amount.filter(item=>item>0).reduce((a,b)=>(a+=b),0);
  const totalExpence=amount.filter(item=>item<0).reduce((a,b)=>(a+=b),0);
  const totalAmount=amount.reduce((a,b)=>(a+=b),0)
  return (
    <>
    <div className="my-3 font-semibold">
          <h2>YOUR BALANCE</h2>
          <h1 className='text-2xl'>${totalAmount}</h1>
        </div>
    <div className="flex justify-around items-center flex-row mt-2 shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-10 py-3">
      <div className="w-auto text-center">
        <h1 className='font-bold text-green-500'>INCOME</h1>
        <span>${totalIncome}</span>
      </div>
      <div className="w-[1px] h-[30px] bg-gray-300"></div>
      <div className="w-auto text-center ">
        <h1 className='font-bold text-red-500'>EXPENSE</h1>
        <span>${Math.abs(totalExpence)}</span>
      </div>
    </div>
    </>
  )
}

export default Info