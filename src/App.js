import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const onDelete = (todo) => {
    console.log("I'm on delete", todo);
  }

  let todos = [
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
  ]

  return (
    <div>
      <Header title="Todo List" />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
