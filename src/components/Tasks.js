import Task from "./Task"

const Tasks = ({tasks}) => {
  return (
    <div>
    {tasks.map((task) => (
      // <h3 key={task.id}>{task.text}</h3>
        <Task key={task.id} task={task} />
    ))}
</div>
  )
}

export default Tasks