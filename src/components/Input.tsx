import "./Input.css"

type InputProps={
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}
const Input = ({todo,setTodo, handleAdd}:InputProps) => {
  return (
   <form className="input-form" onSubmit={handleAdd}>
    <input type="text" placeholder="Enter task" 
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button type="submit">Go</button>
   </form>
  )
}

export default Input
