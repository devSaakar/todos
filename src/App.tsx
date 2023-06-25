import React,{useState} from 'react';
import './App.css';
import { List } from './components/generics/List';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import Container from './Container';
import InputForm from './InputForm';
import { Todo } from './Todo.types';
// import Intro from './Intro';

const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
    setTodo('');
  }

  console.log('todo :>> ', todo);
  return (
    <div className="App">
      {/* <Intro /> */}
      Hello World

      {/* <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <Container styles={{border:"1px solid black",padding:'10px' }} />

      <DomRef />

      <MutableRef />

      {todos.length && todos.map(todo=><div key={todo.id}>{todo.todo}</div>)} */}

      {/* <List items={['Batman','Spiderman','Ironman']}
        onClick={(item)=>console.log( item)}
      />

      <List items={[1,2,3]}
        onClick={(item)=>console.log( item)}
      /> */}

      <List items={[{id:3,name:"Sakar",place:"Dehradun"},{id:4,name:"Sarthak",place:"Jammu"}]}
        onClick={(item)=>console.log( item)}
      /> 




    </div>
  );
}

export default App;
