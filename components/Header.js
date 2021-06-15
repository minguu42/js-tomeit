import styles from 'styles/components/Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <h6 className={styles.headerLogo}>tomeit</h6>
    </div>
  </header>
)

export default Header
