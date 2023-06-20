import React from 'react'
import { createContext,useReducer } from 'react'

const ACTIONS ={
    ADDTRANSACTION:'add_transaction',
    DELETETRANSACTION:'delete_transaction'
}
const initialState={
    transactions:[
        {id:1,name:"yuvan",amount:200}
    ]
}
const Appreducer=(state,action)=>{
    switch (action.type){
        case ACTIONS.ADDTRANSACTION:
            return{...state,transactions:[action.payload,...state.transactions]}
        case ACTIONS.DELETETRANSACTION:
            return{
                ...state,
                transactions:state.transactions.filter(item=>item.id!==action.payload)}
        default:
            return state;
    }
}


export const AppContext=createContext(initialState);

export const AppContextProvider=({children})=> {
    const [state,dispatch]=useReducer(Appreducer,initialState);
    function addTransaction(transaction){
        dispatch({type:ACTIONS.ADDTRANSACTION,payload:transaction})
    }
    function deleteTransaction(id){
        dispatch({type:ACTIONS.DELETETRANSACTION,payload:id})
    }
  return (<AppContext.Provider value={{transactions:state.transactions,addTransaction,deleteTransaction}}>{children}</AppContext.Provider>);
  
}