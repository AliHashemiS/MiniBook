import Link from 'next/link'
import { ShareIcons } from '../shareIcons/ShareIcons'
import styles from './Header.module.css'

export function Header () {
  return (
    <header className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <Link className={styles.linkContainer} href={process.env.URL ?? ''}>
            <img className={styles.smallImage} src={process.env.URL + '/images/TitleWhite.png'} />
          </Link>
        </div>
        <div className={styles.navRight}>
          <div className={styles.shareWrap}>
            <ShareIcons />
          </div>
        </div>
      </div>
    </header>
  )
}
