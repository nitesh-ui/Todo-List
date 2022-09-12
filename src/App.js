import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const onDelete = (todo) => {
    console.log("I'm on delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the kashi",
      desc: "You need to go to the market to get this job done3"
    }
  ]);

  const addTodo = (title, desc) => {
    console.log("Adding new todo item-->", title, desc);

    let sno;
    if(todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  return (
    <div>
      <Header title="Todo List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
