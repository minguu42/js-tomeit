import cn from 'classnames'

import styles from 'styles/components/Task.module.css'
import CircleIcon from './icons/CircleIcon'
import PlayCircle from './icons/PlayCircleIcon'
import TimerIcon from './icons/TimerIcon'
import { fmtDate } from '../lib/utils'

const Task = ({ id, taskName, priority, deadline, pomodoroCount, doneTask }) => (
  <div className={cn(styles.container, {
    [styles.borderColorGreen]: priority === 1,
    [styles.borderColorYellow]: priority === 2,
    [styles.borderColorRed]: priority === 3
  })}
  >
    <div className={styles.left}>
      <button onClick={() => doneTask(id)} className={styles.doneButton}>
        {priority === 0 && <CircleIcon fill='#666666' />}
        {priority === 1 && <CircleIcon fill='#006e54' />}
        {priority === 2 && <CircleIcon fill='#C89932' />}
        {priority === 3 && <CircleIcon fill='#BB5535' />}
      </button>

      {pomodoroCount === 0 && <p className={cn(styles.taskName, styles.marginTB8)}>{taskName}</p>}
      {pomodoroCount >= 1 && pomodoroCount <= 5 &&
        <div className={styles.nameAndIconsLayout}>
          <p className={styles.taskName}>{taskName}</p>
          <div className={styles.timerIcons}>
            {Array.from({ length: pomodoroCount }, (_, i) => i).map((num) =>
              <TimerIcon key={num} size={12} fill='192f60' />
            )}
          </div>
        </div>}
      {pomodoroCount >= 6 &&
        <div>
          <div className={styles.nameAndIconsLayout}>
            <p className={styles.taskName}>{taskName}</p>
            <div className={styles.timerIcons}>
              <TimerIcon size={12} fill='192f60' />
              <p className={styles.pomodoroCount}>{pomodoroCount}</p>
            </div>
          </div>
        </div>}
    </div>
    <div className={styles.right}>
      {deadline !== '0001-01-01' && <p className={styles.deadline}>{fmtDate(deadline)}</p>}
      <PlayCircle />
    </div>
  </div>
)

export default Task
