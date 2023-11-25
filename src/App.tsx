import TodoList from "./components/todolist"
import { useQuery } from "@tanstack/react-query"
import { getInfo } from "./utils/getInfo"

function App() {
     const todoList = useQuery({
          queryKey: ["todos"],
          queryFn: () => getInfo(),
     })

     const { data: todos = [], isLoading: loading, isError, error } = todoList

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
                    <div className="pt-5 text-slate-100 text-center fontextrabold">Error: {error}</div>
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
