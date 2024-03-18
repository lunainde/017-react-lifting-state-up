// src/components/Task.jsx
// import { useState } from "react";

function Task(props) {
//   const [taskCompleted, setTaskCompleted] = useState(false);
//   const toggleTask = () => setTaskCompleted(!taskCompleted);
return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{props.task.name}</h1>
        {props.task.isDone            // <== UPDATE
          ? <span>DONE </span>
          : <span>PENDING ⌛</span>
        }
 
        <h2> Task Description </h2>
        <p>{props.task.description}</p>

        {/* UPDATE */}
        <button className="add" onClick={() => props.toggleTask(props.task._id)}>
        {props.task.isDone ? <span>UNDO </span> : <span>✔️</span>}
        </button>
 
        {/* <button className="add" onClick={() => {}}>
        {props.task.isDone ? <span>UNDO </span> : <span>✔️</span>}
        </button> */}
 
      </div>
    </div>
  );
}
 
export default Task
