import Head from 'next/head'

import Header from 'components/Header'
import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>tomeit</title>
      </Head>
      <Header />
      <main className={styles.welcomeLayout}>
        <h2 className={styles.welcomeHeadline}>やるべきことをやる</h2>
        <p className={styles.welcomeDescription}>tomeit は「今やるべきことだけを考え、行う」<br />をコンセプトにしたタスク管理アプリです。</p>
      </main>
    </div>
  )
}

export default Home
