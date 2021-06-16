import styles from 'styles/components/Button.module.css'

const Button = ({ text, handleClick }) => (
  <button
    className={styles.button}
    onClick={handleClick}
  >
    {text}
  </button>
)

export default Button
