import { TodoType } from "../types/type"


export default function TodoItem({ todo }: { todo: TodoType }) {
     let classData = "my-1 bg-slate-200 p-3 rounded-xl shadow-md shadow-slate-300 hover:shadow-slate-400 hover:shadow-lg"
     classData = todo.completed ? classData + " line-through" : classData
     return <li className={classData}>{todo.title}</li>
}
