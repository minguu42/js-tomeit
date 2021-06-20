import styles from 'styles/components/TaskList.module.css'
import Task from 'components/Task'

const TaskList = () => (
  <div className={styles.container}>
    <Task
      taskName='タスク1'
      primary={0}
      deadline='12月31日'
      pomodoroCount={0}
    />
    <Task
      taskName='タスク2'
      primary={1}
      deadline='12月3日'
      pomodoroCount={1}
    />
    <Task
      taskName='タスク3'
      primary={2}
      deadline='6月2日'
      pomodoroCount={2}
    />
    <Task
      taskName='タスク4'
      primary={3}
      deadline=''
      pomodoroCount={10}
    />
  </div>
)

export default TaskList
