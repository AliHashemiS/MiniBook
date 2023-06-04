import Link from 'next/link'
import styles from './Button.module.css'

export function Button ({ buttonName, buttonlink }) {
  return (
    <Link href={buttonlink ?? ''} className={styles.button}>
      {buttonName}
    </Link>
  )
}
