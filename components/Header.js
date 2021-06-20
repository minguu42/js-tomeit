import { useAuth } from 'lib/AuthContext'
import styles from 'styles/components/Header.module.css'
import AccountMenu from 'components/AccountMenu'
import SummarizeIcon from 'components/icons/SummarizeIcon'

const Header = ({ currentUser }) => (
  <header className={styles.container}>
    <div className={styles.inner}>
      <h6 className={styles.logo}>tomeit</h6>
      {currentUser &&
        <div className={styles.icons}>
          <span role='button' className={styles.icon}>
            <SummarizeIcon fill='#fff' />
          </span>
          <span className={styles.icon}>
            <AccountMenu />
          </span>
        </div>}
    </div>
  </header>
)

const HeaderContainer = () => {
  const { currentUser } = useAuth()

  return (
    <Header currentUser={currentUser} />
  )
}

export default HeaderContainer
