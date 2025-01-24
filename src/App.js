import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
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

      // add task
  const addTask = (task) => {
        console.log(task)
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
    
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks 
     tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}
     /> : "No tasks to display"}
    </div>
  )
}

export default App;
