import styles from 'styles/components/TaskLog.module.css'
import TimerIcon from './icons/TimerIcon'

const TaskLog = ({ pomodoroCount, name, doneAt }) => (
  <div className={styles.container}>
    <div className={styles.leftWrapper}>
      <div className={styles.pomodoroCountDisplay}>
        <TimerIcon fill='#192f60' />
        <p>{pomodoroCount}</p>
      </div>
      <p>{name}</p>
    </div>
    <p>{doneAt}</p>
  </div>
)

export default TaskLog
