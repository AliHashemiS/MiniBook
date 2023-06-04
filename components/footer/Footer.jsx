import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer () {
  return (
    <p className={styles.textStyle}>Minibook flow inspired by <Link href={'https://thenetworkstate.com/' ?? ''} className={styles.hyperLink}>thenetworkstate.com</Link> and <Link href={'https://www.thestreamingbook.com/' ?? ''} className={styles.hyperLink}>thestreamingbook.com</Link>. Developed and coded independently.</p>
  )
}
