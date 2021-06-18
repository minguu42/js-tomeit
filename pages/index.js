import { useState } from 'react'
import Head from 'next/head'

import { useAuth } from 'lib/AuthContext'
import styles from 'styles/Home.module.css'
import Header from 'components/Header'
import Button from 'components/Buttons'

const Home = () => {
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [logoutError, setLogoutError] = useState('')

  const handleClick = async () => {
    setError('')
    try {
      await login()
    } catch {
      setError('ログインに失敗しました。もう一度お試しください。')
    }
  }

  return (
    <div>
      <Head>
        <title>tomeit</title>
      </Head>
      <Header setLogoutError={setLogoutError} />
      <main className={styles.layout}>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {logoutError && <p className={styles.errorMessage}>{logoutError}</p>}
        <div>
          <h2 className={styles.headline}>やるべきことをやる</h2>
          <p className={styles.description}>tomeit は「今やるべきことだけを考え、行う」<br />をコンセプトにしたタスク管理アプリです。</p>
        </div>
        <Button text='login' handleClick={handleClick} />
      </main>
    </div>
  )
}

export default Home
