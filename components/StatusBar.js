import styles from 'styles/components/StatusBar.module.css'

const StatusBar = ({
  countToNextRest,
  remainingTaskNum,
  todayPomodoroNum
}
) => (
  <div className={styles.container}>
    <div className={styles.item}>
      <p className={styles.itemValue}>{countToNextRest}</p>
      <p className={styles.itemKey}>休憩まで</p>
    </div>
    <div className={styles.item}>
      <p className={styles.itemValue}>{remainingTaskNum}</p>
      <p className={styles.itemKey}>残りタスク数</p>
    </div>
    <div className={styles.item}>
      <p className={styles.itemValue}>{todayPomodoroNum}</p>
      <p className={styles.itemKey}>今日のポモドーロ</p>
    </div>
  </div>
)

export default StatusBar
