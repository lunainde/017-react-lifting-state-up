// src/components/ToDoList.jsx

import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
    {
      _id: "1a",
      name: "Task1",
      description: "Do something important",
      isDone: false               // <== ADD
    },
    {
      _id: "2b",
      name: "Task2",
      description: "Do something important",
      isDone: false               // <== ADD
    },
    {
      _id: "3c",
      name: "Task3",
      description: "Do something important",
      isDone: false               // <== ADD
    }
  ];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0); //<== ADD
 
//UPDATE => 1ST COPY THEN UPDATE THE COPY
const toggleTaskDone = (id) => {
    //a copy of the existing tasks array using the SPREAD OPERATOR, to not mutate the state directly:
    const tasksCopy = [...tasks];
      
    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,
      if (task._id === id) {
        task.isDone = task.isDone ? false : true;
        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);        
      }
  
      setTasks(tasksCopy);
    }); 
  }

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted}/>     {/*   UPDATE   */}
      
      <div className="todo-container">
      {/*  ADD   */}
      {tasks.map((task) => <Task key={task._id} task={task} toggleTask={toggleTaskDone}/> )}
      </div>
    </div>
  );
}

export default ToDoList
