import { useState, useEffect } from 'react'
import Head  from 'next/head'
import { useRouter } from 'next/router'

import TaskLogList from 'components/TaskLogList'
import Header from 'components/Header'
import styles from 'styles/History.module.css'
import { useAuth } from 'lib/AuthContext'
import { fetchData } from 'lib/fetch'

const History = () => {
  const [doneTasks, setDoneTasks] = useState([])
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser === null) {
      router.push('/')
      return
    }

    fetchData('/tasks/done', currentUser).then((data) => {
      if (data.tasks === null) {
        setDoneTasks([])
      } else {
        setDoneTasks(data.tasks)
      }
    })
  }, [])

  return (
    <div>
      <Head>
        <title>履歴 | tomeit</title>
      </Head>
      <Header />
      <main className={styles.layout}>
        <TaskLogList doneTasks={doneTasks} />
      </main>
    </div>
  )
}

export default History
