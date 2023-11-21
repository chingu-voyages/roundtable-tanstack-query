import { useEffect, useState } from "react"
import todoItems from "../data/todos.json"
import TodoList from "./components/todolist"
import { TodoType } from "./types/type"

function App() {
     const [todos, setTodos] = useState<TodoType[]>([])
     const [loading, setLoading] = useState(false)

     useEffect(() => {
          setLoading(true)
          setTodos(todoItems)
          const timeout = setTimeout(() => {
               setLoading(false)
          }, 1000)

          return () => {
               clearTimeout(timeout)
          }

     }, [todos])

     if (loading) {
          return <div>Loading...</div>
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
