import {Todo} from "../model";
import SingleTodo from "./SingleTodo";
import "./TodoList.css"

type TodoProps={
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoProps> = ({todos,setTodos}) => {
  return (
    <div className="todos">
      {
        todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  )
}


export default TodoList
