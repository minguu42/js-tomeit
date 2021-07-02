import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from 'styles/components/AddTaskForm.module.css'
import AddTaskIcon from 'components/icons/AddTaskIcon'
import FlagIcon from 'components/icons/FlagIcon'
import { useState } from 'react'
import { postData } from 'lib/fetch'
import { useAuth } from 'lib/AuthContext'

const AddTaskForm = ({
  name,
  handleNameChange,
  priority,
  handlePriorityChange,
  deadline,
  setDeadline,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit} className={styles.container}>
    <AddTaskIcon fill='#666' />
    <input
      type='text'
      title='タスク名'
      value={name}
      placeholder='タスクを追加'
      onChange={handleNameChange}
      className={styles.nameInput}
    />
    <div className={styles.priorityInputLayout}>
      <FlagIcon fill='#666' />
      <input
        type='number'
        title='優先度'
        value={priority}
        max='3'
        min='0'
        onChange={handlePriorityChange}
        className={styles.priorityInput}
      />
    </div>
    <DatePicker
      selected={deadline}
      onChange={(date) => setDeadline(date)}
      isClearable
      placeholderText='期日'
      className={styles.dateInput}
    />
    <button type='submit' hidden />
  </form>
)

const AddTaskFormContainer = ({ addTask }) => {
  const [name, setName] = useState('')
  const [priority, setPriority] = useState(0)
  const [deadline, setDeadline] = useState(null)
  const { currentUser } = useAuth()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const task = { name: name, priority: Number(priority) }

    if (deadline === null) {
      const tmpDeadline = new Date('0001-01-02T00:00:00')
      setDeadline(tmpDeadline)
      task.deadline = tmpDeadline.toISOString().slice(0, 10)
    } else {
      task.deadline = deadline.toISOString().slice(0, 10)
    }

    postData('/tasks', task, currentUser).then((data) => {
      addTask(data)
    })

    setName('')
    setPriority(0)
    setDeadline(null)
  }

  return (
    <AddTaskForm
      name={name}
      handleNameChange={handleNameChange}
      priority={priority}
      handlePriorityChange={handlePriorityChange}
      deadline={deadline}
      setDeadline={setDeadline}
      handleSubmit={handleSubmit}
    />
  )
}

export default AddTaskFormContainer
