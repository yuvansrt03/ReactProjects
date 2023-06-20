import Todo from "./Todo"

function Todos({alltodos,removetodo}) {
  return (
    <>
     {alltodos.map(item=><Todo key={item.id} id={item.id} removetodo={removetodo}>{item.text}</Todo>)}
    </>
  )
}

export default Todos