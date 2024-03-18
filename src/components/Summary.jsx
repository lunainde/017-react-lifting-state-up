// src/components/Summary.jsx

import React from "react";

function Summary(props) {
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      {/* <p className="tasks-completed">0</p> => replace value '0' w/props */}
      <p className="tasks-completed">{props.tasksCompleted}</p>     {/*   UPDATE   */}
    </div>
  );
}

export default Summary;