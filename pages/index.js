import Head from 'next/head'
import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>tomeit</title>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <main>
        Hello, World!
      </main>
    </div>
  )
}

export default Home
