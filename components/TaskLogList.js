import TaskLog from '/components/TaskLog'
import styles from '/styles/components/TaskLogList.module.css'
import { fmtDatetimeForTime } from 'lib/utils'

const TaskLogList = ({ doneTasks }) => (
  <div>
    <h2 className={styles.heading}>完了したタスク</h2>
    <div className={styles.logList}>
      {doneTasks.map(task => (
        <TaskLog
          pomodoroCount={task.pomodoroCount}
          name={task.name}
          doneAt={fmtDatetimeForTime(task.updatedAt)}
        />
      ))}
    </div>
  </div>
)

export default TaskLogList
