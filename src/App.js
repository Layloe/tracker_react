import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import './index.css'


const App = () => {
  const [tasks, setTasks] = useState([
      {
        "id": 1,
        "text": "test",
        "other": "no-show",
        "day": "monday",
        "reminder": true
      },
      {
        "text": "Test4",
        "day": "Wednesday",
        "reminder": false,
        "id": 3
      },
      {
        "text": "Task6",
        "day": "Thursday",
        "reminder": true,
        "id": 4
      }
    ]
      )
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// toggle reminder
const toggleReminder = (id) => {
  console.log(id)
}
    
  return (
    <div className="container">
      <Header />
     {tasks.length > 0 ? <Tasks 
     tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}
     /> : "No tasks to display"}
    </div>
  )
}

export default App;
