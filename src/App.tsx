import { useEffect, useState } from "react"
import TodoList from "./components/todolist"
import { TodoType } from "./types/type"
import { getInfo } from "./utils/getInfo"

function App() {
     const [todos, setTodos] = useState<TodoType[]>([])
     const [loading, setLoading] = useState(false)
     const [isError, setIsError] = useState(false)
     const [errorMessage, setErrorMessage] = useState("")

     useEffect(() => {
          setLoading(true)
          setIsError(false)

          getInfo().then((data) => {
               setTodos(data)
          }).catch((err) => {
               setIsError(true)
               setErrorMessage(err.message)
          })

          setLoading(false)
     }, [todos])

     if (loading) {
          return (
               <div className="bg-gradient-to-br from-purple-500 to-purple-900 min-h-screen">
                    <div className="pt-5 text-slate-100 text-center  uppercase fontextrabold">Loading...</div>
               </div>
          )
     }

     if (isError) {
          return (
               <div className="bg-gradient-to-br from-purple-500 to-purple-900 min-h-screen">
                    <div className="pt-5 text-slate-100 text-center fontextrabold">Error: {errorMessage}</div>
               </div>
          )
     }

     return (
          <div className="bg-gradient-to-br from-purple-500 to-purple-900 min-h-screen">
               <h1 className="pt-5 text-slate-100 text-center text-3xl uppercase fontextrabold">Todos</h1>

               <div className="container mx-auto p-5">
                    <TodoList todoList={todos} />
               </div>
          </div>
     )
}

export default App
