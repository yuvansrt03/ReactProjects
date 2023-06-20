import React from 'react'

function Todo({children,id,removetodo}) {
    function handleClick(){
        removetodo(id);
    }
  return (
    <>
    <div className='w-full h-[30px] flex justify-center items-center mt-2 font-sans border-2 bg-green-200 shadow shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
        <span className='flex-1 p-1'>
            {children}
        </span>
        <button className="h-full w-[30px] text-sm text-white bg-red-600 " onClick={handleClick}>X</button>    
    </div>

    </>
  )
}

export default Todo