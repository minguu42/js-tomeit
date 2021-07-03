import { useEffect, useState } from 'react'
import Head from 'next/head'

import { useAuth } from 'lib/AuthContext'
import { useError } from 'lib/ErrorContext'
import { fetchData, postData, putData } from 'lib/fetch'
import styles from 'styles/Home.module.css'
import Header from 'components/Header'
import Button from 'components/Buttons'
import StatusBar from 'components/StatusBar'
import AddTaskForm from 'components/AddTaskForm'
import TaskList from 'components/TaskList'
import { error } from 'next/dist/build/output/log'

const NotLoggedIn = () => {
  const { login } = useAuth()
  const { setError } = useError()

  const handleLogin = async () => {
    setError('')
    try {
      await login()
    } catch {
      setError('ログインに失敗しました。もう一度お試しください。')
    }
  }

  return (
    <div className={styles.notLoggedInLayout}>
      <div>
        <h2 className={styles.headline}>やるべきことをやる</h2>
        <p className={styles.description}>tomeit は「今やるべきことだけを考え、行う」<br />をコンセプトにしたタスク管理アプリです。</p>
      </div>
      <Button text='login' handleClick={handleLogin} />
    </div>
  )
}

const LoggedIn = () => {
  const [tasks, setTasks] = useState([])
  const [pomodoroCount, setPomodoroCount] = useState(0)
  const [countToNextRest, setCountToNextRest] = useState(4)
  const { currentUser } = useAuth()

  useEffect(() => {
    fetchData('/tasks', currentUser).then((data) => {
      if (data.tasks === null) {
        setTasks([])
      } else {
        setTasks(data.tasks)
        console.log(data.tasks)
      }
    })
  }, [])

  const addTask = (task) => {
    const tmp = tasks.slice()
    tmp.push(task)
    setTasks(tmp)
  }

  const completeTask = (taskID) => {
    putData('/tasks/done/' + String(taskID), null, currentUser).catch((err) => console.log(err))

    const tmp = tasks.filter((t) => t.id !== taskID)
    setTasks(tmp)
  }

  const completePomodoro = (taskID) => {
    const data = {"taskID": taskID}
    postData('/pomodoros/logs', data, currentUser).catch((err) => console.log(err))

    setPomodoroCount((pomodoroCount) => pomodoroCount + 1)
    setCountToNextRest((countToNextRest) => countToNextRest === 1 ? 4 : countToNextRest - 1)

    const tmp = tasks.slice()
    const index = tasks.findIndex(task => task.id === taskID)
    const task = tasks[index]
    task.pomodoroCount += 1
    tmp[index] = task
    setTasks(tmp)
  }

  return (
    <div className={styles.loggedInLayout}>
      <StatusBar
        countToNextRest={countToNextRest}
        remainingTaskNum={tasks.filter((task) => task.isDone === false).length}
        todayPomodoroNum={pomodoroCount}
      />
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} completePomodoro={completePomodoro} />
    </div>
  )
}

const Home = () => {
  const { error } = useError()
  const { currentUser } = useAuth()

  return (
    <div>
      <Head>
        <title>tomeit</title>
      </Head>
      <Header />
      <main className={styles.layout}>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {currentUser ? <LoggedIn /> : <NotLoggedIn />}
      </main>
    </div>
  )
}

export default Home
