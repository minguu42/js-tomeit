import Head from 'next/head'

import { useAuth } from 'lib/AuthContext'
import { useError } from 'lib/ErrorContext'
import styles from 'styles/Home.module.css'
import Header from 'components/Header'
import Button from 'components/Buttons'
import StatusBar from 'components/StatusBar'
import AddTaskForm from 'components/AddTaskForm'
import TaskList from 'components/TaskList'

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
  return (
    <div className={styles.loggedInLayout}>
      <StatusBar
        countToNextRest={0}
        remainingTaskNum={0}
        todayTaskNum={0}
      />
      <AddTaskForm />
      <TaskList />
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
