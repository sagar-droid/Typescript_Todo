import { Todo } from "../model"
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import "./SingleTodo.css"
import { useState, useRef, useEffect } from "react"

type TodoProps={
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}



const SingleTodo = ({todo, todos,setTodos}:TodoProps) => {
    
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id:number) => {
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ))
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo)=>todo.id !== id))
    };

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();
        setTodos(todos.map((todo)=>
            todo.id === id ? {...todo, todo: editTodo} : todo
        ))
        setEdit(false);
    
    }

    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(()=>{
        if(edit && inputRef.current){
            inputRef.current.focus();
        }
    },[edit])

  return (
    <form className="todos-single" onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            edit?(
                <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todos-single-text" type="text" />
            ):

                todo.isDone?(
                    <s className="todos-single-text">{todo.todo}
                    {/* <span className="icon">
                        <AiFillDelete/>
                    </span> */}
                    </s>
                ):(
                    
                    <span className="todos-single-text">{todo.todo}</span>
                )
        }
        <div>
            <span className="icon" onClick={()=>{

                if(!edit && !todo.isDone){
                    setEdit(!edit);
            }
                
            }}>
                <AiFillEdit/>
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
