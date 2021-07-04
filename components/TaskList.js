import styles from 'styles/components/TaskList.module.css'
import Task from 'components/Task'

const TaskList = ({ tasks, completeTask, completePomodoro }) => (
  <div className={styles.container}>
    {tasks.filter(task => task.isDone === false).map(task => {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          priority={task.priority}
          deadline={task.deadline}
          pomodoroCount={task.pomodoroCount}
          completeTask={completeTask}
          completePomodoro={completePomodoro}
        />
      )
    })}
  </div>
)

export default TaskList
