import React from "react"
import { AppContext } from "../Context/GlobalState"
import { useContext } from "react"
function HistoryComp({id,name,type,cash}) {
  const {transaction,deleteTransaction}=useContext(AppContext)
  function handleDelete(){
    deleteTransaction(id)
  }
  return (
    <div className="w-full flex flex-row mt-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <button className="absolute translate-x-[-25px] translate-y-[10px] w-5 bg-red-600 text-white" onClick={handleDelete}>X</button>
        <div className="flex-1 p-2 text-lg">{name}</div>
        <div className="p-2 text-lg">{type==="deposit"?"+":"-"}{Math.abs(Number(cash))}</div>
        <div className={`w-[4px] ${(type==="deposit" ? "bg-green-500":"bg-red-500")}`}></div>
    </div>
  )
}

export default HistoryComp