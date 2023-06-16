import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
export type FilterType="all"| "active" |"completed"



function App() {

    const [tasks, setTasks] =useState( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "Redux", isDone: false },
        { id: 4, title: "ReactJS", isDone: false }
    ])
    const [filter, setFilter]=useState<FilterType> ("all")


    const deleteTask=(id:number)=>{
        setTasks(tasks.filter(el=>el.id!==id))
    }
    const filteredTask=(filter:FilterType)=>{
        setFilter(filter)
    }
    let filteredTasks=tasks
    if (filter==="active"){
      filteredTasks=tasks.filter(el=>!el.isDone)
    }
    if (filter==="completed"){
      filteredTasks=tasks.filter(el=>el.isDone)
    }
    console.log(filteredTasks);

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      filteredTask={filteredTask}/>

        </div>
    );
}

export default App;
