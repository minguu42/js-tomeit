import styles from 'styles/components/TaskList.module.css'
import Task from 'components/Task'

const TaskList = ({ tasks }) => (
  <div className={styles.container}>
    {tasks.map(task => {
      return (
        <Task
          key={task.id}
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
