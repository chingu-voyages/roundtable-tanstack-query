import { useEffect, useState } from "react"
import { TodoType } from "../types/type.d"

export function useGetTodos({ limit, todoFn }: { limit: number, todoFn: () => Promise<TodoType[]> }) {
     const [todos, setTodos] = useState<TodoType[]>([])
     const [loading, setLoading] = useState(false)
     const [isError, setIsError] = useState(false)
     const [errorMessage, setErrorMessage] = useState("")

     useEffect(() => {
          setLoading(true)
          setIsError(false)
          setTodos([])
          setErrorMessage("")

          todoFn().then((data) => {
               setTodos(data)
          }).catch((err) => {
               setIsError(true)
               setErrorMessage(err.message)
               setTodos([])
          })

          setLoading(false)
     }, [limit, todoFn])

     return { todos, loading, isError, errorMessage }
}
