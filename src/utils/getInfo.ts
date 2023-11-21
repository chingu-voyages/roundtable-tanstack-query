import axios from "axios";
import { TodoType } from "../types/type";

export async function getInfo(): Promise<TodoType[]> {
     const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
     return response.data as TodoType[]
}
