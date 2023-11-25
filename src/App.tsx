import TodoList from "./components/todolist"
import { useGetTodos } from "./hooks/queryHook"
import { getInfo, getErrorInfo } from "./utils/getInfo"

function App() {
     const data = useGetTodos({ limit: 10, todoFn: getErrorInfo })


     if (data.loading) {
          return (
               <div className="bg-gradient-to-br from-purple-500 to-purple-900 min-h-screen">
                    <div className="pt-5 text-slate-100 text-center  uppercase fontextrabold">Loading...</div>
               </div>
          )
     }

     if (data.isError) {
          return (
               <div className="bg-gradient-to-br from-purple-500 to-purple-900 min-h-screen">
                    <div className="pt-5 text-slate-100 text-center fontextrabold">Error: {data.errorMessage}</div>
               </div>
          )
     }

     return (
          <div className="bg-gradient-to-br from-purple-500 to-purple-900 min-h-screen">
               <h1 className="pt-5 text-slate-100 text-center text-3xl uppercase fontextrabold">Todos</h1>

               <div className="container mx-auto p-5">
                    <TodoList todoList={data.todos} />
               </div>
          </div>
     )
}

export default App
