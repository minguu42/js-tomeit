import {useState, useEffect} from 'react'
import cn from 'classnames'

import styles from 'styles/components/Task.module.css'
import CircleIcon from 'components/icons/CircleIcon'
import PlayCircle from 'components/icons/PlayCircleIcon'
import TimerIcon from 'components/icons/TimerIcon'
import { convertSecondsIntoMinutes, fmtDatetimeForDate } from 'lib/utils'

const Task = ({
  id,
  name,
  priority,
  deadline,
  pomodoroCount,
  pomodoroTime,
  isPlayingPomodoro,
  handleCircleClick,
  handlePlayClick
}) => (
  <div className={cn(styles.container, {
    [styles.borderColorGreen]: priority === 1,
    [styles.borderColorYellow]: priority === 2,
    [styles.borderColorRed]: priority === 3
  })}
  >
    <div className={styles.leftContainer}>
      {isPlayingPomodoro &&
        <div className={styles.timerWrapper}>
          <TimerIcon fill='192f60' />
          <p>{convertSecondsIntoMinutes(pomodoroTime)}</p>
        </div>}
      {!isPlayingPomodoro &&
        <button onClick={() => handleCircleClick(id)} className={styles.doneButton}>
          {priority === 0 && <CircleIcon fill='#666666' />}
          {priority === 1 && <CircleIcon fill='#006e54' />}
          {priority === 2 && <CircleIcon fill='#C89932' />}
          {priority === 3 && <CircleIcon fill='#BB5535' />}
        </button>}

      {pomodoroCount === 0 && <p className={cn(styles.name, styles.marginTB8)}>{name}</p>}
      {pomodoroCount >= 1 && pomodoroCount <= 5 &&
        <div className={styles.nameAndIconsLayout}>
          <p className={styles.name}>{name}</p>
          <div className={styles.timerIcons}>
            {Array.from({ length: pomodoroCount }, (_, i) => i).map((num) =>
              <TimerIcon key={num} size={12} fill='#192f60' />
            )}
          </div>
        </div>}
      {pomodoroCount >= 6 &&
        <div>
          <div className={styles.nameAndIconsLayout}>
            <p className={styles.name}>{name}</p>
            <div className={styles.timerIcons}>
              <TimerIcon size={12} fill='#192f60' />
              <p className={styles.pomodoroCount}>{pomodoroCount}</p>
            </div>
          </div>
        </div>}
    </div>
    <div className={styles.rightContainer}>
      {deadline !== '0001-01-01' && <p className={styles.deadline}>{fmtDatetimeForDate(deadline)}</p>}
      <button onClick={handlePlayClick}><PlayCircle /></button>
    </div>
  </div>
)

const TaskContainer = ({
  id,
  name,
  priority,
  deadline,
  pomodoroCount,
  completeTask,
  completePomodoro
}) => {
  const [isPlayingPomodoro, setIsPlayingPomodoro] = useState(false)
  const [pomodoroTime, setPomodoroTime] = useState(25)
  const [timerID, setTimerID] = useState(0)

  const tick = () => {
    setPomodoroTime((pomodoroTime) => pomodoroTime - 1)
  }

  const handleCircleClick = (id) => {
    completeTask(id)
  }

  const handlePlayClick = () => {
    setIsPlayingPomodoro(true)

    const timerID = setInterval(() => tick(), 1000)
    setTimerID(timerID)
  }

  useEffect(() => {
    if (pomodoroTime === 0) {
      completePomodoro(id)

      setIsPlayingPomodoro(false)
      setPomodoroTime(25)
      clearInterval(timerID)
    }
  }, [pomodoroTime])

  return (
    <Task
      id={id}
      name={name}
      priority={priority}
      deadline={deadline}
      pomodoroCount={pomodoroCount}
      pomodoroTime={pomodoroTime}
      isPlayingPomodoro={isPlayingPomodoro}
      handleCircleClick={handleCircleClick}
      handlePlayClick={handlePlayClick}
    />
  )
}

export default TaskContainer
