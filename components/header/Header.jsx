import Link from 'next/link'
import { ShareIcons } from '../shareIcons/ShareIcons'
import styles from './Header.module.css'
import Image from 'next/image'

export function Header () {
  return (
    <header className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <Link className={styles.linkContainer} href={process.env.URL ?? ''}>
            <Image width={300} height={118} className={styles.smallImage} src='/images/TitleWhite.png' alt='A Wearable world Logo' />
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
