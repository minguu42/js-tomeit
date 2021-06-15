import Head from 'next/head'

import Header from 'components/Header'
// import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>tomeit</title>
      </Head>
      <Header />
      <main>
        Hello, World!
      </main>
    </div>
  )
}

export default Home
