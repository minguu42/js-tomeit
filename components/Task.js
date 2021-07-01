import cn from 'classnames'

import styles from 'styles/components/Task.module.css'
import CircleIcon from './icons/CircleIcon'
import PlayCircle from './icons/PlayCircleIcon'
import TimerIcon from './icons/TimerIcon'

const Task = ({ taskName, primary, deadline, pomodoroCount }) => (
  <div className={cn(styles.container, {
    [styles.borderColorGreen]: primary === 1,
    [styles.borderColorYellow]: primary === 2,
    [styles.borderColorRed]: primary === 3
  })}
  >
    <div className={styles.left}>
      {primary === 0 && <CircleIcon fill='#666666' />}
      {primary === 1 && <CircleIcon fill='#006e54' />}
      {primary === 2 && <CircleIcon fill='#C89932' />}
      {primary === 3 && <CircleIcon fill='#BB5535' />}
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
      <p className={styles.deadline}>{deadline}</p>
      <PlayCircle />
    </div>
  </div>
)

export default Task
