import styles from 'styles/components/AddTaskForm.module.css'
import AddTask from './icons/AddTask'
import Flag from './icons/Flag'

const AddTaskForm = () => (
  <form className={styles.container}>
      <AddTask fill='#666' />
      <input
        type='text'
        title='タスク名'
        placeholder='タスクを追加'
        className={styles.nameInput}
      />
    <div className={styles.priorityInputLayout}>
      <Flag fill='#666'/>
      <input
        type='number'
        title='優先度'
        max='3'
        min='0'
        className={styles.priorityInput}
      />
    </div>
        <input
          type='date'
          title='期日'
          className={styles.dateInput}
        />
  </form>
)

export default AddTaskForm
