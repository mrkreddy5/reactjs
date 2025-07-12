import './App.css'
import { useState } from 'react';

function App(){

    let [todoInput, updateInput] = useState('');

    let [todoList, updateToDoList] = useState([
        {
            id:1,
            task : "Learn Java"
        },
         {
            id:2,
            task : "Learn React"
        }

        
    ])

    let nextId =3;

    function addNewToDo(){
        if(todoInput===""){
            alert("add some task")
        }
        else{
            let newToDo = [
                ...todoList,
                {
                    id : nextId,
                    task: todoInput
                }
            ]
            updateToDoList(newToDo);
            updateInput("");
        }
    }

    function deleteToDo(id){
        let newList = todoList.filter((todo)=>{
            return todo.id!= id;
        })
        updateToDoList(newList);
    }

    return (
        <div className="container mt-5 w-50">
            <div className="input-group">
                <input className="form-control" 
                    onChange={(e)=>{
                        let task = e.target.value;
                        
                        updateInput(task);
                    }} 
                    type="text" value={todoInput}
                />

                <button onClick={()=>{
                    addNewToDo()
                    }} 
                    className="btn btn-primary">
                Add
                </button>
            </div>

           
            <ul className="list-group mt-5">
            {
                todoList.map((todo)=>{
                    return(
                        <li className="list-group-item">
                            <p>{todo.task}</p>
                            <button onClick={()=>{
                                    deleteToDo(todo.id);
                                }} 
                                className="btn">
                            ❌
                            </button>
                        </li>
                    )
                })
            }
            </ul>
           
        </div>
    )
}

export default App;



// _____________________________________________________________

// App.css

// .list-group-item {
//   display: flex;
//   justify-content: space-between;

// _____________________________________________________________________

// index.js

//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
