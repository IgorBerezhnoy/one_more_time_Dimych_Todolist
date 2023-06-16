import React, {useState} from 'react';

type PropsType={
    title:string
    tasks:TaskType[]
}

type TaskType={
    id:number,
    title:string,
    isDone:boolean
}

export const Todolist:React.FC<PropsType> = (props) => {

    let [counter,setCounter]=useState<number>(1)

    const {title, tasks, ...restProps}=props
    return (<div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={tasks[0].isDone}/><span>{tasks[0].title}</span></li>
            <li><input type="checkbox" checked={tasks[1].isDone}/><span>{tasks[1].title}</span></li>
            <li><input type="checkbox" checked={tasks[2].isDone}/><span>{tasks[2].title}</span></li>
        </ul>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>

    </div>);
};