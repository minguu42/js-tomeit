import { useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from 'lib/AuthContext'
import { useError } from '../lib/ErrorContext'
import styles from 'styles/components/AccountMenu.module.css'
import AccountCircle from 'components/icons/AccountCircle'

const AccountMenu = ({ isDisplay, handleClick, handleLogout }) => (
  <div className={styles.container}>
    <span
      role='button'
      onClick={handleClick}
    >
      <AccountCircle fill='#fff' />
    </span>
    {isDisplay &&
      <div className={styles.menu}>
        <button onClick={handleLogout} className={styles.item}>Log out</button>
      </div>}
  </div>
)

const AccountMenuContainer = () => {
  const [isDisplay, setIsDisplay] = useState(false)
  const router = useRouter()
  const { logout } = useAuth()
  const { setError } = useError()

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
      await router.push('/')
    } catch {
      setError('ログアウトに失敗しました。もう一度お試しください。')
    }
  }

  const handleClick = () => {
    setIsDisplay(isDisplay => !isDisplay)
  }

  return (
    <AccountMenu
      isDisplay={isDisplay}
      handleClick={handleClick}
      handleLogout={handleLogout}
    />
  )
}

export default AccountMenuContainer
