import React from 'react'
import Input from './Input';

interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}

// const InputForm = ({todo,setTodo}:Props) => {
const InputForm:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <form onSubmit={handleAdd}>
        <input type="text" name="newTodo" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit' onClick={handleAdd}>Go</button>

        <Input handleChange={(e)=>{console.log('e', e)}} value={2} />
    </form>
  )
}

export default InputForm