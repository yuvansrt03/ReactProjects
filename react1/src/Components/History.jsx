import React, { useContext } from 'react'
import HistoryComp from './HistoryComp'
import { AppContext } from '../Context/GlobalState'
function History() {
    const  {transactions} =useContext(AppContext);
  return (
    <div className='flex flex-col w-full mt-8'>
          <h2 className='text-xl font-bold'>History</h2>
          <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
        {transactions.map(item=>
            <HistoryComp key={item.id} id={item.id} name={item.name} type={Number(item.amount)>0?"deposit":"withdraw"} cash={Number(item.amount)}/>
          )} 
    </div>
  )
}

export default History