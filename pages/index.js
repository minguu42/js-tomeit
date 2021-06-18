import Head from 'next/head'

import { useAuth } from 'lib/AuthContext'
import { useError } from 'lib/ErrorContext'
import styles from 'styles/Index.module.css'
import Header from 'components/Header'
import Button from 'components/Buttons'

const Landing = () => {
  const { login } = useAuth()
  const { setError } = useError()

  const handleClick = async () => {
    setError('')
    try {
      await login()
    } catch {
      setError('ログインに失敗しました。もう一度お試しください。')
    }
  }

  return (
    <main className={styles.layout}>
      <div>
        <h2 className={styles.headline}>やるべきことをやる</h2>
        <p className={styles.description}>tomeit は「今やるべきことだけを考え、行う」<br />をコンセプトにしたタスク管理アプリです。</p>
      </div>
      <Button text='login' handleClick={handleClick} />
    </main>
  )
}

const Home = () => {
}

const Index = () => {
  const { error } = useError()
  const {currentUser} = useAuth()

  return (
    <div>
      <Head>
        <title>tomeit</title>
      </Head>
      <Header />
      {error && <p className={styles.errorMessage}>{error}</p>}
      {!currentUser && <Landing />}
    </div>
  )
}

export default Index
