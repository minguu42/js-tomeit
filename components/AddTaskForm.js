import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from 'styles/components/AddTaskForm.module.css'
import AddTask from './icons/AddTask'
import Flag from './icons/Flag'
import { useState } from 'react'

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
    <AddTask fill='#666' />
    <input
      type='text'
      title='タスク名'
      value={name}
      placeholder='タスクを追加'
      onChange={handleNameChange}
      className={styles.nameInput}
    />
    <div className={styles.priorityInputLayout}>
      <Flag fill='#666' />
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

const AddTaskFormContainer = () => {
  const [name, setName] = useState('')
  const [priority, setPriority] = useState(0)
  const [deadline, setDeadline] = useState(null)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.alert('name: ' + name + ', priority: ' + priority + ', date: ' + (deadline && deadline.toISOString()))
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
