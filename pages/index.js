import Head from 'next/head'

import Header from 'components/Header'
import styles from 'styles/Home.module.css'
import Button from '../components/Buttons'

const Home = () => {
  return (
    <div>
      <Head>
        <title>tomeit</title>
      </Head>
      <Header />
      <main className={styles.layout}>
        <div>
          <h2 className={styles.headline}>やるべきことをやる</h2>
          <p className={styles.description}>tomeit は「今やるべきことだけを考え、行う」<br />をコンセプトにしたタスク管理アプリです。</p>
        </div>
        <div className={styles.buttons}>
          <Button text='sign up' />
          <Button text='log in' type='outline' />
        </div>
      </main>
    </div>
  )
}

export default Home
