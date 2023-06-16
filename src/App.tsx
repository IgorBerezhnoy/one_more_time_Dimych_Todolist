import React from 'react';
import './App.css';
import {Todolist} from './Components/Todolist';

function App() {

    let task1=[
        {id:1, title:"CSS", isDone:true},
        {id:1, title:"CSS", isDone:true},
        {id:1, title:"React", isDone:false},
    ]

    let task2=[
        {id:1, title:"Terminator", isDone:true},
        {id:1, title:"XXX", isDone:false},
        {id:1, title:"Tarzan", isDone:false},
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={task1}/>
            <Todolist title={"Movies"} tasks={task2}/>

        </div>
    );
}

export default App;
