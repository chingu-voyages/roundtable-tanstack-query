import { useDispatch, useSelector } from "react-redux"
import TodoList from "./components/todolist"
import { useGetInfoQuery } from "./redux/apiSlice/slice"
import { login } from "./redux/login/loginSlice"
import { RootState } from "./redux/store"

function App() {
     const loginUser = useSelector((state: RootState) => state.login.user)
     const dispatch = useDispatch()

     const data = useGetInfoQuery(10)
     const { isLoading: loading, isError, error, data: todos } = data

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

               <button onClick={() => dispatch(login("user"))}>Login</button>
               {loginUser}

               <div className="container mx-auto p-5">
                    <TodoList todoList={todos} />
               </div>
          </div>
     )
}

export default App
