import axios from "axios";
import { TodoType } from "../types/type";

export async function getInfo(): Promise<TodoType[]> {
     const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
     return response.data
}


export async function getErrorInfo(): Promise<TodoType[]> {
     const response = await axios.get("https://jsonplaceholder.typicode.com/todo?_limit=10")
     return response.data
}
