import styles from 'styles/components/TaskList.module.css'
import Task from 'components/Task'

const TaskList = ({ tasks, doneTask }) => (
  <div className={styles.container}>
    {tasks.filter(task => task.isDone === false).map(task => {
      return (
        <Task
          key={task.id}
          id={task.id}
          doneTask={doneTask}
          taskName={task.name}
          priority={task.priority}
          deadline={task.deadline}
          pomodoroCount={task.pomodoroCount}
        />
      )
    })}
  </div>
)

export default TaskList
