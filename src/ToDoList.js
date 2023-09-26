import React from "react";

function ToDo({todo, handleToggle, index}) {
    return <div onClick={() => handleToggle(index)} className={todo.complete ? 'strike':""}>{todo.task}</div>
}

function ToDoList({toDoList, handleToggle, clearCompleted}) {
    return (
        <div>
            {toDoList.map((todo,i) => <ToDo index={i} handleToggle={handleToggle} todo={todo}/>)}
            <button style={{margin:'20px'}} onClick={clearCompleted} >Clear Completed</button>
        </div>
    )
}

export default ToDoList;