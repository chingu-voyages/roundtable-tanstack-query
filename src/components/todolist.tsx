import { TodoType } from "../types/type"
import TodoItem from "./todoitem"


export default function TodoList({ todoList }: { todoList: TodoType[] }) {
     const todos = todoList.map((todo: TodoType) => {
          return <TodoItem key={todo.id} todo={todo} />
     })

     return (
          <ul>
               {todos}
          </ul>
     )
}
