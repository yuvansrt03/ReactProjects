import React from 'react'
import Navbar from './Components/navbar'
// import HistoryComp from './Components/HistoryComp'
import History from './Components/History'
import AddTransaction from './Components/AddTransaction'
import Info from './Components/info'
import { AppContextProvider } from './Context/GlobalState'
function App() {
  return (
      <AppContextProvider>
        <div className="flex justify-center items-center flex-col w-screen">
          <div className='w-[300px] my-10 font-poppins'>
            <Navbar></Navbar>
            <Info></Info>        
            <History></History>
            <AddTransaction></AddTransaction>
          </div>
        </div>
      </AppContextProvider>
  )
}

export default App