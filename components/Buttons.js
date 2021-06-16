import styles from 'styles/components/Button.module.css'
import cn from 'classnames'

const Button = ({ text, handleClick, type = 'normal' }) => (
  <button
    className={cn({
      [styles.normal]: type === 'normal',
      [styles.outline]: type === 'outline'
    })}
    onClick={handleClick}
  >
    {text}
  </button>
)

export default Button
