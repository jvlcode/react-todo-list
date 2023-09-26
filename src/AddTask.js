import React, { useState } from "react";

function AddTask({addTask}) {
    const [input, setInput] = useState('');

    function handeInput(e) {
       setInput(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        addTask(input);
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handeInput} placeholder="Enter Task..." />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTask;