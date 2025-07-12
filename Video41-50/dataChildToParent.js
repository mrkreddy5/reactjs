import { useState } from "react";
import './App.css';
import Search from "./Search"; 

function App() {
  const [ToDos, updateToDos] = useState(["Task1", "Task2"]);

  function addTask(newItem) {
    updateToDos([...ToDos, newItem]);
  }

  return (
    <>
      <h2>To-Do List</h2>
      <Search add={addTask} /> 
      <ul>
        {ToDos.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </>
  );
}

export default App;


// ------------------------------------------------------------------------

import { useState } from "react";

function Search(props) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    props.add(task);    
    setTask("");        
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </>
  );
}

// export default Search;
