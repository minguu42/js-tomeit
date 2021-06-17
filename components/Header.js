import { useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from 'lib/AuthContext'
import styles from 'styles/components/Header.module.css'
import AccountCircle from 'components/icons/AccountCircle'
import Summarize from './icons/Summarize'

const Header = ({ currentUser, isMenuDisplay, handleAccountCircleClick, handleLogout }) => (
  <header className={styles.container}>
    <div className={styles.inner}>
      <h6 className={styles.logo}>tomeit</h6>
      {currentUser &&
        <div className={styles.icons}>
          <span role='button' className={styles.icon}>
            <Summarize fill='#fff' />
          </span>
          <div className={styles.accountMenu}>
            <span onClick={handleAccountCircleClick} role='button' className={styles.icon}>
            <AccountCircle fill='#fff' />
          </span>
            {isMenuDisplay &&
                <button onClick={handleLogout} className={styles.menu}>Log out</button>
            }
          </div>
        </div>}
    </div>
  </header>
)

const HeaderContainer = ({ setLogoutError }) => {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false)
  const router = useRouter()
  const { currentUser, logout } = useAuth()

  const handleAccountCircleClick = () => {
    setIsMenuDisplay(isMenuDisplay => !isMenuDisplay)
  }

  const handleLogout = async () => {
    setLogoutError('')
    try {
      await logout()
      await router.push('/')
    } catch {
      setLogoutError('ログアウトに失敗しました。もう一度お試しください。')
    }
  }

  return (
    <Header
        isMenuDisplay={isMenuDisplay}
        handleAccountCircleClick={handleAccountCircleClick}
        currentUser={currentUser}
        handleLogout={handleLogout} />
  )
}

export default HeaderContainer
