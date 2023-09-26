import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ToDoList from './ToDoList';
import { useState } from 'react';
import AddTask from './AddTask';

function App() {
  const [toDoList, setToDoList] = useState([ 
    {task:'Learn React', complete: false},
    {task:'Fill gas tank', complete: false},
    {task:'Go to store', complete: false}]
    )

    function clearCompleted(){
        let mapped = toDoList.filter(todo => {
            return !todo.complete
        })
        setToDoList(mapped);
    }

    function handleToggle(index) {
        let mapped = toDoList.map((todo, i) => {
            return i == index ? {...todo, complete:!todo.complete}:todo
        })
        setToDoList(mapped);
    }

    function addTask(input) {
        let copy = [...toDoList, { task: input, complete: false }];
        setToDoList(copy)
    }

    return (
        <div className="App">
            <Header/>
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} clearCompleted={clearCompleted}  />
            <AddTask addTask={addTask}/>
        </div>
    );
}

export default App;
